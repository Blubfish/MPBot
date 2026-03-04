const calcQuestions = {
  chapter3: [
    {
      id: 1,
      question:
        "Find the critical points of f(x) = x³ − 6x² + 9x + 1 and classify them.",
      answer: `
f'(x) = 3x² − 12x + 9 = 3(x−1)(x−3)
Critical points: x = 1, 3

Second derivative: f''(x) = 6x − 12
f''(1) = -6 → Local Maximum
f''(3) = 6 → Local Minimum
      `,
    },
    {
      id: 2,
      question:
        "A rectangle has perimeter 40. What dimensions maximize the area?",
      answer: `
2L + 2W = 40 → L + W = 20
Let W = 20 − L

Area: A = L(20 − L) = 20L − L²
A' = 20 − 2L = 0 → L = 10
W = 10

Maximum area at 10 × 10 (square).
      `,
    },
    {
      id: 3,
      question: "Determine where f(x) = x/(x²+1) is increasing and concave up.",
      answer: `
f'(x) = (1 − x²)/(x²+1)²
Increasing when 1 − x² > 0 → -1 < x < 1

Second derivative shows concave up when x > 1 or x < -1.
      `,
    },
  ],

  chapter4: [
    {
      id: 1,
      question: "Compute the indefinite integral ∫(3x² − 4x + 5) dx.",
      answer: `
∫3x² dx = x³
∫−4x dx = −2x²
∫5 dx = 5x

Final answer: x³ − 2x² + 5x + C
      `,
    },
    {
      id: 2,
      question: "Find the area between y = x² and y = 2x.",
      answer: `
Find intersections:
x² = 2x → x(x−2)=0 → x=0,2

Area = ∫₀² (2x − x²) dx
= [x² − x³/3]₀²
= 4 − 8/3
= 4/3
      `,
    },
    {
      id: 3,
      question: "Given f'(x) = 2x cos(x²) and f(0)=1, find f(x).",
      answer: `
Let u = x² → du = 2x dx

∫2x cos(x²) dx = ∫cos(u) du = sin(u)
= sin(x²) + C

Use f(0)=1:
sin(0)+C=1 → C=1

Final answer: f(x) = sin(x²) + 1
      `,
    },
  ],

  chapter5: [
    {
      id: 1,
      question: "Differentiate y = xˣ.",
      answer: `
Take ln both sides:
ln y = x ln x

Differentiate:
(1/y)y' = ln x + 1

y' = xˣ(ln x + 1)
      `,
    },
    {
      id: 2,
      question: "Solve e²ˣ = 7.",
      answer: `
Take natural log:
2x = ln 7
x = (ln 7)/2
      `,
    },
    {
      id: 3,
      question: "Find the derivative of y = ln(sin x).",
      answer: `
Derivative of ln(u) is u'/u
u = sin x → u' = cos x

y' = cos x / sin x = cot x
      `,
    },
  ],

  chapter6: [
    {
      id: 1,
      question: "Solve the differential equation dy/dx = 3y.",
      answer: `
Separate:
dy/y = 3 dx

Integrate:
ln|y| = 3x + C
y = Ce^{3x}
      `,
    },
    {
      id: 2,
      question: "Find the general solution of dy/dx + 2y = 0.",
      answer: `
dy/dx = −2y

Separate:
dy/y = −2 dx

ln|y| = −2x + C
y = Ce^{−2x}
      `,
    },
    {
      id: 3,
      question: "Solve dy/dx = x² with y(0)=4.",
      answer: `
Integrate:
y = ∫x² dx = x³/3 + C

Use y(0)=4 → C=4

Final answer:
y = x³/3 + 4
      `,
    },
  ],

  chapter7: [
    {
      id: 1,
      question:
        "Find the volume when the region bounded by y = x² and y = 4 is revolved about the x-axis.",
      answer: `
Intersection:
x²=4 → x=±2

Volume = π∫₋₂² (4² − (x²)²) dx
= π∫₋₂² (16 − x⁴) dx
Evaluate to get final volume.
      `,
    },
    {
      id: 2,
      question: "Find the arc length of y = x³ᐟ² from x=0 to x=4.",
      answer: `
Arc length formula:
∫√(1+(dy/dx)²) dx

y' = (3/2)x^{1/2}
Substitute and evaluate from 0 to 4.
      `,
    },
    {
      id: 3,
      question: "Find the work required to lift a 10 N object 5 meters upward.",
      answer: `
Work = Force × Distance
W = 10 × 5 = 50 J
      `,
    },
  ],

  chapter8: [
    {
      id: 1,
      question: "Evaluate ∫ x eˣ dx using integration by parts.",
      answer: `
Let u=x, dv=eˣ dx
du=dx, v=eˣ

∫x eˣ dx = x eˣ − ∫eˣ dx
= x eˣ − eˣ + C
= eˣ(x−1)+C
      `,
    },
    {
      id: 2,
      question: "Use L'Hôpital's Rule to evaluate limₓ→0 (sin x)/x.",
      answer: `
Differentiate top and bottom:
cos x / 1

Limit becomes cos(0)=1
      `,
    },
    {
      id: 3,
      question: "Determine whether ∫₁^∞ 1/x² dx converges or diverges.",
      answer: `
∫1/x² dx = -1/x

Evaluate from 1 to ∞:
0 - (-1)=1

Converges.
      `,
    },
  ],

  chapter9: [
    {
      id: 1,
      question: "Determine if the series Σ 1/n diverges or converges.",
      answer: `
Harmonic series.
It diverges.
      `,
    },
    {
      id: 2,
      question: "Find the radius of convergence of Σ xⁿ / n.",
      answer: `
Use Ratio Test.
Limit gives |x|<1

Radius of convergence: R=1
      `,
    },
    {
      id: 3,
      question:
        "Find the Taylor series of eˣ centered at x=0 up to the x³ term.",
      answer: `
eˣ = 1 + x + x²/2! + x³/3! + ...
= 1 + x + x²/2 + x³/6
      `,
    },
  ],
  seriesTests: [
    {
      id: 1,
      question: "What is the Divergence Test (Nth Term Test)?",
      answer: `
  If lim (n→∞) aₙ ≠ 0
  OR limit does not exist

  → Series DIVERGES

  If lim (n→∞) aₙ = 0

  → Test is inconclusive
  `,
    },

    {
      id: 2,
      question: "What is a Geometric Series and when does it converge?",
      answer: `
  Σ arⁿ

  If |r| < 1

  → CONVERGES
  Sum = a / (1 - r)

  If |r| ≥ 1

  → DIVERGES
  `,
    },

    {
      id: 3,
      question: "What is a P-Series and when does it converge?",
      answer: `
  Σ 1 / n^p

  If p > 1

  → CONVERGES

  If p ≤ 1

  → DIVERGES
  `,
    },

    {
      id: 4,
      question: "What is a Telescoping Series and when does it converge?",
      answer: `
  A telescoping series is one where terms cancel:

  Example form:

  Σ (1/n - 1/(n+1))

  Most terms cancel out.

  To determine convergence:

  • Write out first few terms
  • Observe cancellation
  • Take limit of remaining terms

  If remaining limit is finite

  → CONVERGES

  If remaining limit is infinite

  → DIVERGES
  `,
    },

    {
      id: 5,
      question: "What is the Integral Test and when does it converge?",
      answer: `
  If f(x) is:
  • positive
  • continuous
  • decreasing

  Then compare with:

  ∫ from 1 to ∞ f(x) dx

  If integral converges

  → Series CONVERGES

  If integral diverges

  → Series DIVERGES
  `,
    },

    {
      id: 6,
      question: "What is the Direct Comparison Test?",
      answer: `
  If 0 ≤ aₙ ≤ bₙ
  AND Σ bₙ converges

  → Σ aₙ CONVERGES

  If aₙ ≥ bₙ ≥ 0
  AND Σ bₙ diverges

  → Σ aₙ DIVERGES
  `,
    },

    {
      id: 7,
      question: "What is the Limit Comparison Test?",
      answer: `
  Compute:

  lim (n→∞) aₙ / bₙ = L

  If 0 < L < ∞

  → Both behave the same
  (Both converge or both diverge)

  If L = 0 or ∞

  → Inconclusive
  `,
    },

    {
      id: 8,
      question: "What is the Alternating Series Test (Leibniz Test)?",
      answer: `
  For:

  Σ (-1)ⁿ aₙ
  or
  Σ (-1)ⁿ⁺¹ aₙ

  If:
  1) aₙ is decreasing
  2) lim (n→∞) aₙ = 0

  → CONVERGES

  If limit ≠ 0

  → DIVERGES

  NOTE:
  May converge conditionally (not absolutely).
  `,
    },

    {
      id: 9,
      question: "What is the Ratio Test?",
      answer: `
  Compute:

  lim (n→∞) |aₙ₊₁ / aₙ| = L

  If L < 1

  → CONVERGES (absolutely)

  If L > 1

  → DIVERGES

  If L = 1

  → Inconclusive
  `,
    },

    {
      id: 10,
      question: "What is the Root Test?",
      answer: `
  Compute:

  lim (n→∞) |aₙ|^(1/n) = L

  If L < 1

  → CONVERGES (absolutely)

  If L > 1

  → DIVERGES

  If L = 1

  → Inconclusive
  `,
    },

    {
      id: 11,
      question: "What is Absolute vs Conditional Convergence?",
      answer: `
  If Σ |aₙ| converges

  → Absolutely Convergent
  → Automatically converges

  If Σ aₙ converges
  BUT Σ |aₙ| diverges

  → Conditionally Convergent
  `,
    },
  ],

  derivatives: [
    { id: 1, question: "d/dx (c) where c is constant", answer: "0" },
    { id: 2, question: "d/dx (x^n)", answer: "n * x^(n-1) (Power Rule)" },
    { id: 3, question: "d/dx (e^x)", answer: "e^x" },
    { id: 4, question: "d/dx (a^x)", answer: "a^x * ln(a)" },
    { id: 5, question: "d/dx (ln x)", answer: "1 / x" },
    { id: 6, question: "d/dx (log_a x)", answer: "1 / (x * ln a)" },
    { id: 7, question: "d/dx (sin x)", answer: "cos x" },
    { id: 8, question: "d/dx (cos x)", answer: "-sin x" },
    { id: 9, question: "d/dx (tan x)", answer: "sec^2 x" },
    { id: 10, question: "d/dx (cot x)", answer: "-csc^2 x" },
    { id: 11, question: "d/dx (sec x)", answer: "sec x * tan x" },
    { id: 12, question: "d/dx (csc x)", answer: "-csc x * cot x" },
    { id: 13, question: "d/dx (arcsin x)", answer: "1 / √(1 - x^2)" },
    { id: 14, question: "d/dx (arccos x)", answer: "-1 / √(1 - x^2)" },
    { id: 15, question: "d/dx (arctan x)", answer: "1 / (1 + x^2)" },
    { id: 16, question: "d/dx (arccot x)", answer: "-1 / (1 + x^2)" },
    { id: 17, question: "d/dx (arcsec x)", answer: "1 / (|x| * √(x^2 - 1))" },
    { id: 18, question: "d/dx (arccsc x)", answer: "-1 / (|x| * √(x^2 - 1))" },
    { id: 19, question: "d/dx (f + g)", answer: "f' + g'" },
    { id: 20, question: "d/dx (f * g)", answer: "f'g + fg' (Product Rule)" },
    {
      id: 21,
      question: "d/dx (f / g)",
      answer: "(f'g - fg') / g^2 (Quotient Rule)",
    },
    {
      id: 22,
      question: "d/dx (f(g(x)))",
      answer: "f'(g(x)) * g'(x) (Chain Rule)",
    },
  ],

  integrals: [
    { id: 1, question: "∫ c dx", answer: "c * x + C" },
    { id: 2, question: "∫ x^n dx", answer: "x^(n+1)/(n+1) + C (n ≠ -1)" },
    { id: 3, question: "∫ 1/x dx", answer: "ln|x| + C" },
    { id: 4, question: "∫ e^x dx", answer: "e^x + C" },
    { id: 5, question: "∫ a^x dx", answer: "a^x / ln(a) + C" },
    { id: 6, question: "∫ sin x dx", answer: "-cos x + C" },
    { id: 7, question: "∫ cos x dx", answer: "sin x + C" },
    { id: 8, question: "∫ tan x dx", answer: "ln|sec x| + C" },
    { id: 9, question: "∫ cot x dx", answer: "ln|sin x| + C" },
    { id: 10, question: "∫ sec x dx", answer: "ln|sec x + tan x| + C" },
    { id: 11, question: "∫ csc x dx", answer: "-ln|csc x + cot x| + C" },
    { id: 12, question: "∫ sec^2 x dx", answer: "tan x + C" },
    { id: 13, question: "∫ csc^2 x dx", answer: "-cot x + C" },
    { id: 14, question: "∫ sec x tan x dx", answer: "sec x + C" },
    { id: 15, question: "∫ csc x cot x dx", answer: "-csc x + C" },
    { id: 16, question: "∫ 1/√(1-x^2) dx", answer: "arcsin x + C" },
    { id: 17, question: "∫ -1/√(1-x^2) dx", answer: "arccos x + C" },
    { id: 18, question: "∫ 1/(1+x^2) dx", answer: "arctan x + C" },
    { id: 19, question: "∫ -1/(1+x^2) dx", answer: "arccot x + C" },
    { id: 20, question: "∫ 1/(x√(x^2-1)) dx", answer: "arcsec x + C" },
    { id: 21, question: "∫ -1/(x√(x^2-1)) dx", answer: "arccsc x + C" },
    { id: 22, question: "∫ (f + g) dx", answer: "∫ f dx + ∫ g dx" },
    { id: 23, question: "∫ k f(x) dx", answer: "k ∫ f(x) dx" },
    {
      id: 24,
      question: "∫ f(g(x)) g'(x) dx",
      answer: "Substitution / Reverse Chain Rule",
    },
    {
      id: 25,
      question: "∫ u dv",
      answer: "Integration by Parts: u v - ∫ v du",
    },
  ],
};

function getRandomMathQuestion(chapter) {
  if (chapter === "chapter3") {
    const randomIndex = Math.floor(
      Math.random() * calcQuestions.chapter3.length,
    );
    return calcQuestions.chapter3[randomIndex];
  } else if (chapter === "chapter4") {
    const randomIndex = Math.floor(
      Math.random() * calcQuestions.chapter4.length,
    );
    return calcQuestions.chapter4[randomIndex];
  } else if (chapter === "chapter5") {
    const randomIndex = Math.floor(
      Math.random() * calcQuestions.chapter5.length,
    );
    return calcQuestions.chapter5[randomIndex];
  } else if (chapter === "chapter6") {
    const randomIndex = Math.floor(
      Math.random() * calcQuestions.chapter6.length,
    );
    return calcQuestions.chapter6[randomIndex];
  } else if (chapter === "chapter7") {
    const randomIndex = Math.floor(
      Math.random() * calcQuestions.chapter7.length,
    );
    return calcQuestions.chapter7[randomIndex];
  } else if (chapter === "chapter8") {
    const randomIndex = Math.floor(
      Math.random() * calcQuestions.chapter8.length,
    );
    return calcQuestions.chapter8[randomIndex];
  } else if (chapter === "chapter9") {
    const randomIndex = Math.floor(
      Math.random() * calcQuestions.chapter9.length,
    );
    return calcQuestions.chapter9[randomIndex];
  } else if (chapter === "seriesTests") {
    const randomIndex = Math.floor(
      Math.random() * calcQuestions.seriesTests.length,
    );
    return calcQuestions.seriesTests[randomIndex];
  } else if (chapter === "derivatives") {
    const randomIndex = Math.floor(
      Math.random() * calcQuestions.derivatives.length,
    );
    return calcQuestions.derivatives[randomIndex];
  } else if (chapter === "integrals") {
    const randomIndex = Math.floor(
      Math.random() * calcQuestions.integrals.length,
    );
    return calcQuestions.integrals[randomIndex];
  } else {
    const allQuestions = Object.values(calcQuestions).flat();
    const randomQuestion =
      allQuestions[Math.floor(Math.random() * allQuestions.length)];
    return randomQuestion;
  }
}

module.exports = getRandomMathQuestion;
