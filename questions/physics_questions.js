require("dotenv").config();
const API_KEY = process.env.GEMINI_API_KEY;

let currentCard = null;

async function getPhysicsQuestion(topic) {
  const rules = `
  Return only raw JSON in this exact format:
  {"question":"...","answer":"..."}

  Rules:
  - Do not include extra text outside the JSON
  - Do not use LaTex
  - Format it nicely so its easy for a normal user to read, don't clump too much into a big paragraph
  - Keep the answer under 2000 characters
  `;

  function makePrompt(topicText) {
    return `Generate one random AP Physics style question from ${topicText}.\n${rules}`;
  }

  const prompts = {
    random: `Generate one random AP Physics style question.\n${rules}`,
    unit1: makePrompt("Unit 1: Kinematics and Forces Part 1"),
    unit2: makePrompt("Unit 2: More Dynamics and SHM"),
    unit3: makePrompt("Unit 3: Work, Energy, and Momentum"),
    unit4: makePrompt("Unit 4: Rotation and Torque"),
    unit5: makePrompt("Unit 5: Gravitation"),
    unit6: makePrompt("Unit 6: Oscillations"),
    unit7: makePrompt("Unit 7: Electrostatics"),
    unit8: makePrompt("Unit 8: Gauss's Law"),
    unit9: makePrompt("Unit 9: Electric Potential and Electric Potential Energy"),
  };

  const prompt = prompts[topic];

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

  return currentCard;
}

module.exports = getPhysicsQuestion;
