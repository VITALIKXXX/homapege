{
    const welcome = () => {
        console.log("Czesc!");
    }

    const toggleBackgroun = () => {
        const element = document.querySelector(".js-element");
        const themeName = document.querySelector(".js-element__themeName");
        element.classList.toggle("color");

        if (element.classList.contains("color")) {
            themeName.innerText = "jasniejszy";
        } else {
            themeName.innerText = " ciemniejszy";

        }

    };

    const init = () => {

        const przycisk = document.querySelector(".js-element__przycisk");
        przycisk.addEventListener("click", toggleBackgroun);

        welcome();
    }
    init();
}
