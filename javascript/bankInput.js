const totalDeposite = document.getElementById('totalDeposite');
const totalWithdraw = document.getElementById('totalWithdraw');
const totalAmount = document.getElementById('totalAmount');
const inputDeposite = document.getElementById('inputDeposite');
const depositeBtn = document.getElementById('depositeBtn');
const inputWithdraw = document.getElementById('inputWithdraw');
const withdrawBtn = document.getElementById('withdrawBtn');
//convert string to float
let floatDeposite = parseFloat(totalDeposite.innerText);
depositeBtn.addEventListener('click', function () {
    const giveDeposite = parseFloat(inputDeposite.value);
    floatDeposite += giveDeposite;
    totalDeposite.innerText = floatDeposite;

    inputDeposite.value = '';

    //add amount also

    let previousTotalAmount = parseFloat(totalAmount.innerText);
    previousTotalAmount += floatDeposite;
    totalAmount.innerText = previousTotalAmount;
})
let floatTotalWithdraw = parseFloat(totalWithdraw.innerText);
withdrawBtn.addEventListener('click', function () {
    const previousInputWithdraw = parseFloat(inputWithdraw.value);
    floatTotalWithdraw += previousInputWithdraw;
    totalWithdraw.innerText = floatTotalWithdraw;
    inputWithdraw.value = '';
    //withdreae money
    let previousTotalAmount = parseFloat(totalAmount.innerText);
    previousTotalAmount -= floatTotalWithdraw;
    totalAmount.innerText = previousTotalAmount;
})