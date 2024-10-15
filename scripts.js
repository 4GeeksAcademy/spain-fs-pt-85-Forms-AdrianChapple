// Initial variables

let creditNumberInfo = false;
let cvcInfo = false;
let amountInfo = false;
let fNameInfo = false;
let lNameInfo = false;
let cityInfo = false;
let stateInfo = false;
let postalInfo = false;
let cardTypeInfo = false;

// All variables check

let everythingCheck = () => {
    if (creditNumberInfo && cvcInfo && amountInfo && fNameInfo && lNameInfo && cityInfo && stateInfo && postalInfo && cardTypeInfo) {
        return true;
    } else {
        return false;
    }
}


// Accepted Character functions (Only letters %% Only numbers)
function onlyNumbers(input){
    return input.value = input.value.replace(/[^0-9]/g, '');
}

function onlyLetters (input){
    return input.value = input.value.replace(/[^a-zA-Z]/g, '');
}


// Custom Popovers creation for credit card check-mark and x-mark

const popoverCheckCard = new bootstrap.Popover('.check-mark-ccard', {
    container: 'body'
})

const popoverXCard = new bootstrap.Popover('.x-mark-ccard', {
    container: 'body'
})

const popoverCheckCVC = new bootstrap.Popover('.check-mark-cvc', {
    container: 'body'
})

const popoverXCVC = new bootstrap.Popover('.x-mark-cvc', {
    container: 'body'
})

const popoverCheckAmount = new bootstrap.Popover('.check-mark-amount', {
    container: 'body'
})

const popoverXAmount = new bootstrap.Popover('.x-mark-amount', {
    container: 'body'
})

// Credit Card check (functional credit card example: 4112344112344113  &&  non-functional credit card example: 4112344112344114)
    // Luhn algorithm check (No es mi función, la "presté" de internet)

const isLuhnValid = function luhn(array) {
    return function (number) {
      let len = number ? number.length : 0,
        bit = 1,
        sum = 0;

      while (len--) {
        sum += !(bit ^= 1) ? parseInt(number[len], 10) : array[number[len]];
      }

      return sum % 10 === 0 && sum > 0;
    };
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]);

    //Change credit card color borders

function checkCardNumber(input) {
    const cardNumberArray = Array.from(String(input.value), Number);

    if (cardNumberArray.length > 14) {
        if (!isLuhnValid(cardNumberArray)) {
            document.getElementById("card-number").style.borderColor = "red";
            document.getElementById("check-mark-ccard").style.visibility = "hidden";
            document.getElementById("x-mark-ccard").style.visibility = "visible";
            creditNumberInfo = false;
        } else {
            document.getElementById("card-number").style.borderColor = "green";
            document.getElementById("x-mark-ccard").style.visibility = "hidden";
            document.getElementById("check-mark-ccard").style.visibility = "visible";
            creditNumberInfo = true;
        }
    } else {
        document.getElementById("card-number").style.borderColor = "red";
        document.getElementById("check-mark-ccard").style.visibility = "hidden";
        document.getElementById("x-mark-ccard").style.visibility = "visible";
        creditNumberInfo = false;
    }
}

// CVC total length number check

function checkCVCnumber(input) {
    const CVCnumber = input.value;
    if (CVCnumber.length < 3) {
        document.getElementById("cvc").style.borderColor = "red";
        document.getElementById("check-mark-cvc").style.visibility = "hidden";
        document.getElementById("x-mark-cvc").style.visibility = "visible";
        cvcInfo = false;
    } else {
        document.getElementById("cvc").style.borderColor = "green";
        document.getElementById("x-mark-cvc").style.visibility = "hidden";
        document.getElementById("check-mark-cvc").style.visibility = "visible";
        cvcInfo = true;
    }
}

// Amount number check != 0
function checkAmountNumber(input) {
    const amountNumber = input.value;
    if (amountNumber == 0) {
        document.getElementById("amount").style.borderColor = "red";
        document.getElementById("check-mark-amount").style.visibility = "hidden";
        document.getElementById("x-mark-amount").style.visibility = "visible";
        amountInfo = false;
        
    } else {
        document.getElementById("amount").style.borderColor = "green";
        document.getElementById("x-mark-amount").style.visibility = "hidden";
        document.getElementById("check-mark-amount").style.visibility = "visible";
        amountInfo = true;
    }
}

// First name check

function checkFirstName(input) {
    const fNameCheck = input.value;
    if (fNameCheck.length < 1) {
        document.getElementById("fname").style.borderColor = "red";
        fNameInfo = false;
    } else {
        document.getElementById("fname").style.borderColor = "green";
        fNameInfo= true;
    }
}


// Last name check

function checkLastName(input) {
    const lNameCheck = input.value;
    if (lNameCheck.length < 1) {
        document.getElementById("lname").style.borderColor = "red";
        lNameInfo = false;
    } else {
        document.getElementById("lname").style.borderColor = "green";
        lNameInfo = true;
    }
}


// City check

function checkCity(input) {
    const cityCheck = input.value;
    if (cityCheck.length < 1) {
        document.getElementById("city").style.borderColor = "red";
        cityInfo = false;
    } else {
        document.getElementById("city").style.borderColor = "green";
        cityInfo = true;
    }
}

// State check

function checkState(select) {
    const stateCheck = select.value;
    if (stateCheck == "Choose...") {
        document.getElementById("state").style.borderColor = "red";
        stateInfo = false;
    } else {
        document.getElementById("state").style.borderColor = "green";
        stateInfo = true;
    }
}

// Postal code check

function checkPostalNumber(input) {
    const postalNumber = input.value;
    if (postalNumber.length < 5) {
        document.getElementById("postal-code").style.borderColor = "red";
        postalInfo = false;
    } else {
        document.getElementById("postal-code").style.borderColor = "green";
        postalInfo = true;
    }
}


// Select Card type colors (Lo sé es un poco cutre...)

function updateColorCardMastercard() {
    document.getElementById("mastercard-img").style.filter = "grayscale(0%)";
    document.getElementById("visa-img").style.filter = "grayscale(100%)";
    document.getElementById("american-express-img").style.filter = "grayscale(100%)";
    document.getElementById("paypal-img").style.filter = "grayscale(100%)";
    cardTypeInfo = true;
}

function updateColorCardVisa() {
    document.getElementById("mastercard-img").style.filter = "grayscale(100%)";
    document.getElementById("visa-img").style.filter = "grayscale(0%)";
    document.getElementById("american-express-img").style.filter = "grayscale(100%)";
    document.getElementById("paypal-img").style.filter = "grayscale(100%)";
    cardTypeInfo = true;
}

function updateColorCardAmericanExpress() {
    document.getElementById("mastercard-img").style.filter = "grayscale(100%)";
    document.getElementById("visa-img").style.filter = "grayscale(100%)";
    document.getElementById("american-express-img").style.filter = "grayscale(0%)";
    document.getElementById("paypal-img").style.filter = "grayscale(100%)";
    cardTypeInfo = true;
}

function updateColorCardPaypal() {
    document.getElementById("mastercard-img").style.filter = "grayscale(100%)";
    document.getElementById("visa-img").style.filter = "grayscale(100%)";
    document.getElementById("american-express-img").style.filter = "grayscale(100%)";
    document.getElementById("paypal-img").style.filter = "grayscale(0%)";
    cardTypeInfo = true;
}

// Alert change and Final check 

function alertChange() {
    if (everythingCheck()) {
        document.getElementById("error-alert").style.visibility = "hidden";
        document.getElementById("success-alert").style.visibility = "visible";
        
    } else {
        document.getElementById("error-alert").style.visibility = "visible";
        document.getElementById("success-alert").style.visibility = "hidden";
    }
}