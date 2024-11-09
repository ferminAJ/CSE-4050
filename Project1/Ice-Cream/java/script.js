function updateCream(layer, imagePath) {
  const imgElement = document.getElementById(layer);
  imgElement.src = "assets/" + imagePath;
  imgElement.style.display = "block";
}

function toggleTopping(toppingID, imagePath) {
  const toppingElement = document.getElementById(toppingID);
  if (
    toppingElement.style.display === "none" ||
    toppingElement.style.display === ""
  ) {
    toppingElement.src = "assets/" + imagePath;
    toppingElement.style.display = "block";
  } else {
    toppingElement.style.display = "none";
  }
}

function addToCart() {
  // Get the shopping cart container
  const cart = document.querySelector(".page2");

  // Create the item cell
  const itemCell = document.createElement("div");
  itemCell.classList.add("item-cell");

  // Create the small image container
  const itemImage = document.createElement("div");
  itemImage.classList.add("item-image");

  // Clone the ice cream image container and make it smaller
  const iceCreamClone = document
    .querySelector(".ice-container")
    .cloneNode(true);
  iceCreamClone.style.width = "100px";
  iceCreamClone.style.height = "100px";
  iceCreamClone.querySelectorAll("img").forEach((img) => {
    img.style.width = "100px";
    img.style.height = "100px";
  });
  itemImage.appendChild(iceCreamClone);

  // Create the description container
  const itemDescription = document.createElement("div");
  itemDescription.classList.add("item-description");

  // Get selected flavor, sauce, and toppings for description
  const flavor =
    document
      .querySelector('input[name="ice-cream"]:checked')
      .value.charAt(0)
      .toUpperCase() +
    document.querySelector('input[name="ice-cream"]:checked').value.slice(1);
  const sauce =
    document.querySelector('input[name="sauce"]:checked').value === "none"
      ? "No Sauce"
      : document
          .querySelector('input[name="sauce"]:checked')
          .value.replace("-", " ");
  const toppings =
    Array.from(document.querySelectorAll('input[name="topping"]:checked'))
      .map(
        (topping) =>
          topping.value.charAt(0).toUpperCase() + topping.value.slice(1)
      )
      .join(", ") || "No Toppings";

  // Set item description text
  itemDescription.textContent = `${flavor} Ice Cream, ${sauce}, ${toppings}`;

  // Append the image and description to item cell
  itemCell.appendChild(itemImage);
  itemCell.appendChild(itemDescription);

  // Add the item cell to the cart
  cart.appendChild(itemCell);
}
