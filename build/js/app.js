document.addEventListener("DOMContentLoaded", () => {
    iniciarApp();
});

function iniciarApp() {
    crearGaleria();
}

function crearGaleria() {
    const galeria = document.querySelector(".galeria-imagenes");
    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement("picture");
        imagen.innerHTML = `<source srcset=\"build/img/thumb/${i}.avif\" type=\"image/avif\"><source srcset=\"build/img/thumb/${i}.webp\" type=\"image/webp\"><img loading=\"lazy\" width=\"200\" height=\"300\" src=\"build/img/thumb/${i}.jpg\"alt=\"Imagenes galeria\">`;

        imagen.onclick = function () {
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);

    }
}
//Crear overlay con la imagen
function mostrarImagen(index) {
    const imagen = document.createElement("picture");
    imagen.innerHTML = `<source srcset=\"build/img/grande/${index}.avif\" type=\"image/avif\"><source srcset=\"build/img/grande/${index}.webp\" type=\"image/webp\"><img loading=\"lazy\" width=\"200\" height=\"300\" src=\"build/img/grande/${index}.jpg\"alt=\"Imagenes galeria\">`;
    const overlay = document.createElement("DIV");
    overlay.appendChild(imagen);
    overlay.onclick = function () {
        const body = document.querySelector("body");
        body.classList.remove("fijar-body");
        overlay.remove();
    }
    overlay.classList.add("overlay");


    //Boton para cerrar el modal
    const cerrarModal = document.createElement("P")
    cerrarModal.textContent = "X";
    cerrarModal.classList.add("btn-cerrar");
    cerrarModal.onclick = function () {
        const body = document.querySelector("body");
        body.classList.remove("fijar-body");
        overlay.remove();
    };
    overlay.appendChild(cerrarModal);

    //Añadirlo al HTML
    const body = document.querySelector("body");
    body.appendChild(overlay);
    body.classList.add("fijar-body");
}