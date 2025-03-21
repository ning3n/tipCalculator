const billAmountEl = document.getElementById("bill");
const tipAmountEl = document.getElementById("tip");
const calculateButtonEl = document.getElementById("calculate");
const totalEl = document.getElementById("total");

calculateButtonEl.addEventListener("click", () => {
    if((billAmountEl.value == "") || (tipAmountEl.value == "")){
        alert("Debes ingresar todos los datos para continuar");
    }else{
        const billAmount = parseFloat(billAmountEl.value);
        const tipAmount = parseFloat(tipAmountEl.value);
        const total = billAmount + (billAmount * (tipAmount / 100));
        totalEl.innerText = (`El total de la cuenta es ${total}`);
        console.log(total);
        console.log(billAmount);
    }
});