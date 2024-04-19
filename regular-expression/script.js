let regexInputsat = document.querySelector("#regexInputsat");
let validationTextsat = document.querySelector("#validation-text-sat");

const REGULAR_EXPRESSION = /^[^\d]{10,}$/;

regexInputsat.addEventListener("input", function() {
    validationTextsat.innerHTML = REGULAR_EXPRESSION.test(regexInputsat.value) 
    ? "<p class='text-green-600'>Valid</p>" : "<p class='text-red-600'>Invalid</p>";
});