// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Implement Arithmetic Functions ---

    /**
     * Adds two numbers.
     * @param {number} number1 The first number.
     * @param {number} number2 The second number.
     * @returns {number} The sum of the two numbers.
     */
    function add(number1, number2) {
        return number1 + number2;
    }

    /**
     * Subtracts the second number from the first.
     * @param {number} number1 The first number.
     * @param {number} number2 The second number.
     * @returns {number} The difference between the two numbers.
     */
    function subtract(number1, number2) {
        return number1 - number2;
    }

    /**
     * Multiplies two numbers.
     * @param {number} number1 The first number.
     * @param {number} number2 The second number.
     * @returns {number} The product of the two numbers.
     */
    function multiply(number1, number2) {
        return number1 * number2;
    }

    /**
     * Divides the first number by the second.
     * Includes a check to prevent division by zero.
     * @param {number} number1 The dividend.
     * @param {number} number2 The divisor.
     * @returns {number|string} The quotient, or an error message if dividing by zero.
     */
    function divide(number1, number2) {
        if (number2 === 0) {
            return "Error: Cannot divide by zero";
        }
        return number1 / number2;
    }

    // --- 2. Attach Event Listeners ---

    // Get references to the input and result elements
    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const resultSpan = document.getElementById('calculation-result');

    // Event listener for the addition button
    document.getElementById('add').addEventListener('click', function() {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        const result = add(number1, number2);
        resultSpan.textContent = result;
    });

    // Event listener for the subtraction button
    document.getElementById('subtract').addEventListener('click', function() {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        const result = subtract(number1, number2);
        resultSpan.textContent = result;
    });

    // Event listener for the multiplication button
    document.getElementById('multiply').addEventListener('click', function() {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        const result = multiply(number1, number2);
        resultSpan.textContent = result;
    });

    // Event listener for the division button
    document.getElementById('divide').addEventListener('click', function() {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        const result = divide(number1, number2);
        resultSpan.textContent = result;
    });

});