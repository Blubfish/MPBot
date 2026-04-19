require("dotenv").config();
const API_KEY = process.env.GEMINI_API_KEY;

let currentCard = null;

async function newGetRandomMathQuesiton(topic) {
  const rules = `
  Return only raw JSON in this exact format:
  {"question":"...","answer":"..."}

  Rules:
  - Use plain text only
  - Do not use LaTeX
  - Do not use markdown
  - Do not use code fences
  - Do not use backslashes
  - Do not include extra text outside the JSON
  - Keep the answer short and clear
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
  };

    topicText = promptsp[topic];




  if (!prompt) {
    throw new Error("Invalid topic");
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    }
  );

  const data = await response.json();
  console.log("full response:", data);

  if (!response.ok) {
    throw new Error(data.error?.message || "Gemini request failed");
  }

  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error("No text returned from Gemini");
  }

  const cleanedText = text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();


  try {
    currentCard = JSON.parse(cleanedText);
  } catch (error) {
    console.log("Bad JSON returned:", text);
    throw new Error("Gemini did not return valid JSON");
  }

  console.log("Question:", currentCard.question);
  console.log("Answer is hidden for now");

  return currentCard;
}

function showAnswer() {
  if (!currentCard) {
    console.log("No question generated yet.");
    return null;
  }

  console.log("Answer:", currentCard.answer);
  return currentCard.answer;
}

module.exports = { newGetRandomMathQuesiton, showAnswer };
