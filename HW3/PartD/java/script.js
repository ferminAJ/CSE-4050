function updateCream(layer, imagePath) {
  const imgElement = document.getElementById(layer);
  imgElement.src = "assets/" + imagePath;
  imgElement.style.display = "block";
}

function hideLayer(layer) {
  const imgElement = document.getElementById(layer);
  imgElement.src = "";
  imgElement.style.display = "none";
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
