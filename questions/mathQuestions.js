require("dotenv").config();
const { generateQuestionCard } = require("./geminiJson");

async function getMathQuestion(topic) {
    const rules = `
      Return only a single raw JSON object.
      Output must be directly parseable by JSON.parse with no preprocessing.

      Required format:
      {"question":"...","answer":"..."}

      Rules:
      - Do not include markdown fences.
      - Do not include any text before or after the JSON object.
      - Use exactly these fields: "question" and "answer".
      - The entire response must be valid JSON.
      - Inside JSON strings, every backslash must be escaped as \\\\.
      - Therefore inline LaTeX delimiters must appear as \\\\( ... \\\\).
      - Therefore display LaTeX delimiters must appear as \\\\[ ... \\\\].
      - Example of valid JSON string content: "Solve \\\\(x+1=2\\\\)."
      - Do not use unescaped sequences like \\(, \\), \\[, \\], \\], \\frac, \\geq in raw JSON.
      - Keep the answer under 2000 characters.
      - Write clearly for a normal user.
      - Break the answer into short paragraphs when helpful.
      - If the problem has parts like A, B, and C, keep them in the same string but separate each part with a blank line.
      - Format multipart text like: "A. ...\\n\\nB. ...\\n\\nC. ..."
      - Do not combine all parts into one large paragraph.
    `;

    
    function makePrompt(topicText) {
      return `Generate one random AP Calculus BC style question from ${topicText}.\n${rules}`;
    }

    const prompts = {
      random: `Generate one random AP Calculus BC style question.\n${rules}`,
      integrals: `Generate one random AP Calculus BC style integral question.\n${rules}`,
      derivatives: `Generate one random AP Calculus BC style derivative question.\n${rules}`,
      seriesTests: `Generate one random AP Calculus BC style series and convergence test question.\n${rules}`,
      chapter3: makePrompt("Applications of Differentiation"),
      chapter4: makePrompt("Integration"),
      chapter5: makePrompt("Transcendental Functions"),
      chapter6: makePrompt("Differential Equations"),
      chapter7: makePrompt("Applications of Integration"),
      chapter8: makePrompt("Integration Techniques, L'Hopital's Rule, and Improper Integrals"),
      chapter9: makePrompt("Infinite Series"),
      chapter10: makePrompt("Conics, Parametric Equations, and Polar Coordinates/Vectors"),
    };

    const prompt = prompts[topic];

    if (!prompt) {
      throw new Error("Invalid topic");
    }

    const model = "gemini-3-flash-preview";
    const currentCard = await generateQuestionCard({ model, prompt });
    console.log("Generated question:", currentCard.question);

    return currentCard;
    
}

module.exports = getMathQuestion;
