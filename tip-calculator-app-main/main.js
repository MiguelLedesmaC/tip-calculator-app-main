// Input bill
const bill = document.querySelector(".calculator__bill__input");

//Inputs Tip
const tipBtns = document.querySelectorAll(".calculator__tip__btns__selected");
const tipFive = document.getElementById("5");
const tipTen = document.getElementById("10");
const tipFifteen = document.getElementById("15");
const tipTwentyFive = document.getElementById("25");
const tipFifty = document.getElementById("50");
let tipCustom = document.getElementById("custom");

//People number
const people = document.getElementById("people-number");

//Total tip
let tipAmountForPeople = document.querySelector(
    ".amount__container__tip__quantity"
);
let totalBill = document.querySelector(".total");
//Reset
const reset = document.querySelector(".amount__btn");
//Error
const error = document.getElementById("error");

let totalTipAmount = 0;
billInput = 0;
peopleQuantity = 0;
let totalAmount = 0;

bill.addEventListener("input", () => {
    billInput = parseFloat(bill.value);
});
tipCustom.addEventListener("input", () => {
    tipPercentageCustom = parseFloat(tipCustom.value);
    resultadoCustom = parseFloat((billInput * tipPercentageCustom) / 100);
    totalTipAmount = resultadoCustom;
    tipAmountForPeople.innerText = `$${resultadoCustom}`;
});

people.addEventListener("input", () => {
    peopleQuantity = parseInt(people.value);
    selectTip(tipFive, 0.05);
    selectTip(tipTen, 0.1);
    selectTip(tipFifteen, 0.15);
    selectTip(tipTwentyFive, 0.25);
    selectTip(tipFifty, 0.5);
    totalAmount = (billInput / peopleQuantity + totalTipAmount).toFixed(2);
    totalBill.innerHTML = `$${totalAmount}`;
    if (people.value == 0) {
        totalBill.innerHTML = `$0`;
    }
});
tipBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("click");
        if (people.value == 0 || people.value == "") {
            console.log("entra");
            error.style.display = "inline";
        } else {
            error.style.display = "none";
        }
    });
});

reset.addEventListener("click", () => {
    bill.value = "";
    billInput = 0;
    people.value = "";
    tipAmountForPeople.innerHTML = "$0";
    totalBill.innerText = "$0";
    totalAmount = 0;
    tipCustom.value = "";
});

//Funciones
/**
 *
 * @param {btn} tipBtn wich button selected
 * @param {*} percentage porcentaje a multiplicar
 */
function selectTip(tipBtn, percentage = number) {
    tipBtn.addEventListener("click", () => {
        resultado = parseFloat(billInput * percentage);
        totalTipAmount = resultado;
        tipAmountForPeople.innerText = `$${resultado}`;
        totalAmount = (billInput / peopleQuantity + totalTipAmount).toFixed(2);
        totalBill.innerHTML = `$${totalAmount}`;
    });
}
