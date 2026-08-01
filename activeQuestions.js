const TTL_MS = 15 * 60 * 1000;
const pruneIntervalMs = 60 * 1000;

const activeQuestions = new Map();
const oldMathQuestions = new Map();
const oldPhysicsQuestions = new Map();

function setActive(id, data, subject) {
  const expiresAt = Date.now() + TTL_MS;
  activeQuestions.set(id, { data, expiresAt });

  if (subject === "math") {
    oldMathQuestions.set(id, { data, expiresAt });
  } else if (subject === "physics") {
    oldPhysicsQuestions.set(id, { data, expiresAt });
  }
}

function getActive(id) {
  const entry = activeQuestions.get(id);
  if (!entry) return undefined;
  if (Date.now() > entry.expiresAt) {
    activeQuestions.delete(id);
    return undefined;
  }
  return entry.data;
}

setInterval(() => {
  const now = Date.now();

  for (const [id, { expiresAt }] of activeQuestions) {
    if (now > expiresAt) activeQuestions.delete(id);
  }

  for (const [id, { expiresAt }] of oldMathQuestions) {
    if (now > expiresAt) oldMathQuestions.delete(id);
  }

  for (const [id, { expiresAt }] of oldPhysicsQuestions) {
    if (now > expiresAt) oldPhysicsQuestions.delete(id);
  }
}, pruneIntervalMs);

module.exports = {
  setActive,
  getActive,
  oldMathQuestions,
  oldPhysicsQuestions,
};
