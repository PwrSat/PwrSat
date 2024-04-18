let regexInputAndra = document.querySelector("#regexInputAndra");
let validationTextAndra = document.querySelector("#validation-text-andra");

const REGULAR_EXPRESSION = /^[^\d]{10,}$/;

regexInputAndra.addEventListener("input", function() {
    validationTextAndra.innerHTML = REGULAR_EXPRESSION.test(regexInputAndra.value) 
    ? "<p class='text-green-600'>Valid</p>" : "<p class='text-red-600'>Invalid</p>";
});