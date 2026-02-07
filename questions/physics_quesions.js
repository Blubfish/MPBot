const physics_questions = ["What is the two equation for flux?", "What is the equation for electric potential difference?", "What is Gausses law?"];

function getRandomPhysicsQuestion() {
    const randomIndex = Math.floor(Math.random() * physics_questions.length);
    return physics_questions[randomIndex];
}

module.exports = getRandomPhysicsQuestion;