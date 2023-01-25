{
    const welcome = () => {
        console.log("Czesc!");
    }
    
    const toggleBackgroun = () => {
        element.classList.toggle("color");
    
        if (element.classList.contains("color")) {
            themeName.innerText = "jasniejszy";
        } else {
            themeName.innerText = " ciemniejszy";
    
        }
    
    };
    welcome();
    
    
    const przycisk = document.querySelector(".js-element__przycisk");
    const element = document.querySelector(".js-element");
    const themeName = document.querySelector(".js-element__themeName");
    
    przycisk.addEventListener("click", toggleBackgroun);
    
    
}