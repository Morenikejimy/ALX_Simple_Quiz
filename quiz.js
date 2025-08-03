// Function Declaration
function checkAnswer() {
    // Identify the Correct Answer
    const correctAnswer = "4";

    // Retrieve the User's Answer
    // First, find the selected radio button
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    
    // Get the element where feedback will be displayed
    const feedbackElement = document.getElementById('feedback');
    
    // Check if an answer was selected
    if (selectedRadio) {
        const userAnswer = selectedRadio.value;

        // Compare the User’s Answer with the Correct Answer
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        // Handle case where no answer is selected
        feedbackElement.textContent = "Please select an answer.";
    }
}

// Add an Event Listener to the Submit Button
// Select the button
const submitButton = document.getElementById('submit-answer');

// Add the click event listener
submitButton.addEventListener('click', checkAnswer);