let regexInputSat = document.querySelector("#regexInputSat");
let validationTextsat = document.querySelector("#validation-text-sat");

const REGULAR_EXPRESSION = /^[^\d]{10,}$/;

regexInputSat.addEventListener("input", function() {
    validationTextsat.textContent = REGULAR_EXPRESSION.test(regexInputSat.value) 
    ? "Valid" : "Invalid, minimum 10 characters required.";
});
