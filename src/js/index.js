const botonAltTema = document.getElementById("boton-tema");
const body = (document.querySelector("body"));
const imgBotonTrocaTema = (document.querySelector(".img-boton"));
body.classList.toggle("modo-dark");
botonAltTema.addEventListener("click", () => {
    body.classList.toggle("modo-dark"); 
    if (body.classList.contains("modo-dark")) {
        // body.classList.remove("modo-dark");
        imgBotonTrocaTema.setAttribute("src", "./src/images/sun.png");
    } else {
        // body.classList.add("modo-dark");
        imgBotonTrocaTema.setAttribute("src", "./src/images/moon.png");
    }
})