// regex satu
let regexInputSat = document.querySelector("#regexInputSat");
let validationTextsat = document.querySelector("#validation-text-sat");

const REGULAR_EXPRESSION_1 = /^[^\d]{10,}$/;

regexInputSat.addEventListener("input", function() {
    validationTextsat.textContent = REGULAR_EXPRESSION_1.test(regexInputSat.value) 
    ? "Valid" : "Invalid, minimum 10 characters required.";
});

// regex dua
let regexInputSat2 = document.querySelector("#regexInputSat2");
let validationTextSat2 = document.querySelector("#validation-text-Sat2");

const REGULAR_EXPRESSION_2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

regexInputSat2.addEventListener("input", function() {
    validationTextSat2.textContent = REGULAR_EXPRESSION_2.test(regexInputSat2.value) 
    ? "Valid" : "Invalid, minimum 8 characters required with at least one uppercase, one lowercase, and one digit.";
});

// regex tiga
let regexInputSat3 = document.querySelector("#regexInputSat3");
let validationTextSat3 = document.querySelector("#validation-text-Sat3");

const REGULAR_EXPRESSION_3 = /^[a-zA-Z0-9]{6,12}$/;

regexInputSat3.addEventListener("input", function() {
    validationTextSat3.textContent = REGULAR_EXPRESSION_3.test(regexInputSat3.value) 
    ? "Valid" : "Invalid, minimum 6 characters and maximum 12 characters allowed with only letters and numbers.";
});

// regex empat
let regexInputSat4 = document.querySelector("#regexInputSat4");
let validationTextSat4 = document.querySelector("#validation-text-Sat4");

const REGULAR_EXPRESSION_4 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

regexInputSat4.addEventListener("input", function() {
    validationTextSat4.textContent = REGULAR_EXPRESSION_4.test(regexInputSat4.value) 
    ? "Valid" : "Invalid email format.";
});

// regex lima
let regexInputSat5 = document.querySelector("#regexInputSat5");
let validationTextSat5 = document.querySelector("#validation-text-Sat5");

const REGULAR_EXPRESSION_5 = /^\d{5}$/;

regexInputSat5.addEventListener("input", function() {
    validationTextSat5.textContent = REGULAR_EXPRESSION_5.test(regexInputSat5.value) 
    ? "Valid" : "Invalid, 5 digits required.";
});
