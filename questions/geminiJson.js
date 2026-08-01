require("dotenv").config();

const API_KEY = process.env.GEMINI_API_KEY;

function validateQuestionCard(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error("Response was not a JSON object");
  }

  const keys = Object.keys(value).sort();
  const expectedKeys = ["answer", "question"];

  if (
    keys.length !== expectedKeys.length ||
    keys.some((key, index) => key !== expectedKeys[index])
  ) {
    throw new Error('Response must contain exactly "question" and "answer"');
  }

  if (
    typeof value.question !== "string" ||
    value.question.trim().length === 0
  ) {
    throw new Error('Field "question" must be a non-empty string');
  }

  if (typeof value.answer !== "string" || value.answer.trim().length === 0) {
    throw new Error('Field "answer" must be a non-empty string');
  }

  if (value.answer.length > 2000) {
    throw new Error('Field "answer" must be 2000 characters or fewer');
  }

  return value;
}

async function callGemini({ model, parts, generationConfig }) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts,
          },
        ],
        generationConfig,
      }),
    },
  );

  try {
    if (response.status === 429) {
      return JSON.stringify({
        question: "Ran out of Gemini limits :((",
        answer: "Ran out of Gemini limits :((",
      });
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      throw new Error(data.error?.message || "No text returned from Gemini");
    }

    return text;
  } catch (err) {
    console.error("Gemini request failed:", err);
    throw err;
  }
}

async function generateQuestionCard({ model, prompt, maxAttempts = 3 }) {
  let lastError = null;
  let invalidText = null;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const parts = [{ text: prompt }];

    if (invalidText && lastError) {
      parts.push({
        text: `Your previous response was invalid JSON for this reason: ${lastError}. Return a corrected response as one raw JSON object only.`,
      });
      parts.push({
        text: `Previous invalid response:\n${invalidText}`,
      });
    }

    try {
      const text = await callGemini({
        model,
        parts,
        generationConfig: {
          responseMimeType: "application/json",
        },
      });

      console.log(text);

      invalidText = text;
      return validateQuestionCard(JSON.parse(text));
    } catch (error) {
      lastError =
        error instanceof SyntaxError
          ? `JSON parse error: ${error.message}`
          : error.message;

      if (attempt === maxAttempts) {
        throw new Error(
          `Gemini did not return valid JSON after ${maxAttempts} attempts: ${lastError}`,
        );
      }
    }
  }

  throw new Error("Gemini did not return valid JSON");
}

module.exports = {
  generateQuestionCard,
};
