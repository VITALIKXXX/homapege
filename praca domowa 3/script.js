console.log("Czesc! ten cod jest juz w repozytorium Git");

let przycisk = document.querySelector(".js-element__przycisk");
let element = document.querySelector(".js-element");
let themeName = document.querySelector(".js-element__themeName");

przycisk.addEventListener("click", () => {
    element.classList.toggle("color");

    if (element.classList.contains("color")) {
        themeName.innerText = "jasniejszy";
    } else {
        themeName.innerText = " ciemniejszy";

    }

})

