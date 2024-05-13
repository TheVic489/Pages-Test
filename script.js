function toggleCarta() {
    console.log("toggleCarta");
    var carta = document.getElementById("carta");
    carta.style.display = (carta.style.display === "none" || carta.style.display === "") ? "block" : "none";
}

document.addEventListener("click", function() {
    toggleCarta();
});
