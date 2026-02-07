const math_questions = ["what is the derivative of x²?", "solve ∫ ⅟x dx", "what is the limit of (1 + 1/n)^n as n approaches infinity?"];

function getRandomMathQuestion() {
    const randomIndex = Math.floor(Math.random() * math_questions.length);
    return math_questions[randomIndex];
}

module.exports = getRandomMathQuestion;