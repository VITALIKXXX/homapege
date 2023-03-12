{
    const welcome = () => {
        console.log("Czesc!");
    }

    const toggleBackgroun = () => {
        const mainElement = document.querySelector(".js-main");
        const themeName = document.querySelector(".js-themeName");
        mainElement.classList.toggle("color");

        themeName.innerText = mainElement.classList.contains("color") ? "jasniejszy" : " ciemniejszy";
    }

    const init = () => {

        const przycisk = document.querySelector(".js-element__przycisk");

        przycisk.addEventListener("click", toggleBackgroun);

        welcome();
    }
    init();
}