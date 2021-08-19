function getInputValue(input) {
    const inputFeild = document.getElementById(input);
    const inputFeildValue = inputFeild.value;
    const convertNumberInput = parseFloat(inputFeildValue);
    inputFeild.value = '';
    return convertNumberInput;
}
function getTextvalue(text, inputAmount) {
    const textField = document.getElementById(text);
    const textFieldvalue = textField.innerText;
    let convertTextValue = parseFloat(textFieldvalue);
    convertTextValue += inputAmount
    textField.innerText = convertTextValue;
    return textField.innerText;
}
function getTotal() {
    const previousBalanceTotal = document.getElementById('totalAmount');
    const previousBalanceTotalText = previousBalanceTotal.innerText;
    const convertBalanceTotal = parseFloat(previousBalanceTotalText);
    return convertBalanceTotal;
}
function calculateTotal(inputAmount, isAdd) {
    const previousBalanceTotal = document.getElementById('totalAmount');
    let previousTotalAmount = getTotal();
    if (isAdd == true) {
        previousTotalAmount += inputAmount;
        previousBalanceTotal.innerText = previousTotalAmount;
    }
    else {

        previousTotalAmount -= inputAmount;
        previousBalanceTotal.innerText = previousTotalAmount;
    }

}
document.getElementById('depositeBtn').addEventListener('click', function () {
    const gettingInput = getInputValue('inputDeposite');
    if (gettingInput > 0) {
        getTextvalue('totalDeposite', gettingInput);
        calculateTotal(gettingInput, true);
    }

});
document.getElementById('withdrawBtn').addEventListener('click', function () {
    const gettingInput = getInputValue('inputWithdraw');
    const currentBalance = getTotal();
    if (gettingInput > 0 && gettingInput < currentBalance) {
        getTextvalue('totalWithdraw', gettingInput);
        calculateTotal(gettingInput, false);
    }
    else {
        alert('bapper bank paia bap re huga marbar aico?');
    }
})