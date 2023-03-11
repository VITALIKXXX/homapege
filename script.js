{
    const welcome = () => {
        console.log("Czesc!");
    }

    const toggleBackgroun = () => {
        const mainElement = document.querySelector(".js-main");
        const themeName = document.querySelector(".js-themeName");
        mainElement.classList.toggle("color");

        if (mainElement.classList.contains("color")) {
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
