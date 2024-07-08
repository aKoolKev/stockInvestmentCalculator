//global vars
let purchasePrice, sellingPrice, numShares;
let purchasePriceEl, sellingPriceEl, numSharesEl, earningEl, initialInvestmentEl;

//calculate the earnings of an investment
function calculateEarnings(){
    //grab users input
    const purchasePrice = purchasePriceEl.value;
    const sellingPrice = sellingPriceEl.value;
    const numShares = numSharesEl.value;

    const earningsVal = ( (sellingPrice - purchasePrice)*numShares ).toFixed(2);
    earningEl.innerHTML = "$ " + earningsVal;

    if (earningsVal < 0){
        //loss -> make text red
        earningEl.style.color = "#da2c38";
    } else if (earningsVal > 0) {
        //profit -> make text green
        earningEl.style.color = "#38b000";
    }
    //no earning is just black
}

//compute the number of shares based on purchase price and initial investment
function getNumShares(){
    const initialInvestment = initialInvestmentEl.value;
    const purchasePrice = purchasePriceEl.value;

    numSharesEl.value = Math.floor(initialInvestment/purchasePrice);
}

//clear the number of shares number input field
function clear(){
    numSharesEl.value = '';
}

window.onload = function(){ 
    const calculateNumSharesButton = document.getElementById("calculate-number-shares-button").addEventListener('click', getNumShares);
    const clearButton = document.getElementById("number-share-reset-button").addEventListener('click', clear);

    //array of element IDs
    const elementIds = ["purchase-price", "selling-price", "number-of-shares"];

    //add "change" event handler to all text input fields
    elementIds.forEach(id => {
        const el = document.getElementById(id);
        el.addEventListener('change', calculateEarnings);
    });

    //initialize text input field 
    purchasePriceEl = document.getElementById("purchase-price");
    sellingPriceEl = document.getElementById("selling-price");
    numSharesEl = document.getElementById("number-of-shares");
    earningEl = document.getElementById("earnings");
    initialInvestmentEl = document.getElementById("initial-investment");
}