let formElement = document.querySelector(".js-form");
let moneyElement = document.querySelector(".js-form__money");
let selectElement = document.querySelector(".js-form__select");
let resultElement = document.querySelector(".js-form__result");
let EUR = 4.7037;
let USD = 4.5971;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let money = +moneyElement.value;
    let select = selectElement.value;
    let result = resultElement.value;


    switch (select) {
        case "EUR":
            result = money / EUR;
            break;

        case "USD":
            result = money / USD;
            break;


    }
    resultElement.innerText = `${result.toFixed(2)}${select}`;


});


