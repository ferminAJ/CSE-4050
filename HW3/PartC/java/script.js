function updatePizza(layer, imagePath){
    const imgElement = document.getElementById(layer);
    imgElement.src = "assets/" + imagePath;
    imgElement.style.display = "block";
}

function toggleTopping(toppingID, imagePath){
    const toppingElement = document.getElementById(toppingID);
    if (
        toppingElement.style.display === "none" || toppingElement.style.display === ""
    )
    {
        toppingElement.src = "assets/" + imagePath;
        toppingElement.style.display = "block";
    }
    else
    {
        toppingElement.style.display = "none";
    }
}
