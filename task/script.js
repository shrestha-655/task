// Function to calculate the result based on selected operation
function calculate() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operation = document.getElementById('operation').value;
    const errorMessage = document.getElementById('error-message');
    let result;

    // Clear previous result and error
    document.getElementById('result').innerText = '';
    errorMessage.style.display = 'none';

    // Input validation
    if (!num1 || isNaN(num1) || !num2 || isNaN(num2)) {
        errorMessage.innerText = "Please enter valid numbers!";
        errorMessage.style.display = 'block';
        return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    // Handle the operations
    switch (operation) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            if (n2 === 0) {
                result = 'Error: Division by zero';
            } else {
                result = n1 / n2;
            }
            break;
        case '%':
            result = n1 % n2;
            break;
        case '//':
            if (n2 === 0) {
                result = 'Error: Division by zero';
            } else {
                result = Math.floor(n1 / n2);
            }
            break;
        case '**':
            result = Math.pow(n1, n2);
            break;
        default:
            result = 'Invalid operation';
    }

    // Display the result
    document.getElementById('result').innerText = `Result: ${result}`;
}

// Function to clear error message when user starts typing again
function clearError() {
    document.getElementById('error-message').style.display = 'none';
}

// Function to reset the calculator
function resetCalculator() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('error-message').style.display = 'none';
}
