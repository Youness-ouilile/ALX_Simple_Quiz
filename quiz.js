function checkAnswer() {
    // Function body
    const correctAnswer = '4';
    const userAnswer =document.querySelector('input[name="quiz"]:checked')?.value;
    const feedbacke =document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedbacke.textContent ='Correct! Well done.';
    } else {
        feedbacke.textContent ="That's incorrect. Try again!";
    }

}
document.getElementById('submit-answer').addEventListener("click", checkAnswer);