let hieghtElement = document.querySelector(".js-hight")
let weightElement = document.querySelector(".js-weight")
let formElement = document.querySelector(".js-form")
let bmiElement = document.querySelector(".js-bmi")


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let hieght = hieghtElement.value;
    let weight = weightElement.value;

    let bmi = weight / ((hieght / 100) ** 2);

    bmiElement.innerText = bmi;
});