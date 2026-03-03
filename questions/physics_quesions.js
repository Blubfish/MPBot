const apQuestions = {
  unit1: [
    {
      id: 1,
      question: "A car accelerates uniformly from rest at 3 m/s². What is its speed after 5 seconds?",
      answer: `
Use kinematics:

v = at

Since it starts from rest (v₀ = 0):

v = 3 × 5
v = 15 m/s
      `
    },
    {
      id: 2,
      question: "A 10 kg block is pulled along a frictionless surface with a 20 N force. What is its acceleration?",
      answer: `
Newton's Second Law:

F = ma

Solve for acceleration:

a = F / m
a = 20 / 10
a = 2 m/s²
      `
    }
  ],

  unit2: [
    {
      id: 1,
      question: "A 2 kg mass oscillates on a spring with k = 50 N/m. What is its period of oscillation?",
      answer: `
Period of a spring:

T = 2π√(m/k)

T = 2π√(2/50)
T = 2π√(0.04)
T ≈ 2π(0.2)
T ≈ 1.26 s
      `
    },
    {
      id: 2,
      question: "A block slides down a 30° frictionless incline. How long does it take to reach the bottom if h = 5 m?",
      answer: `
Acceleration down incline:

a = g sin(30°)
a = 9.8 × 0.5
a = 4.9 m/s²

Height relation:
h = (1/2)gt² for vertical,
but along incline use kinematics:

s = (1/2)at²

Solve for t:

t = √(2h / a)
t = √(10 / 4.9)
t ≈ 1.43 s
      `
    },
    {
      id: 3,
      question: "A pendulum of length 1 m is released from 10°. What is the approximate period?",
      answer: `
For small angles:

T = 2π√(L/g)

T = 2π√(1/9.8)
T ≈ 2π(0.319)
T ≈ 2.01 s
      `
    }
  ],

  unit3: [
    {
      id: 1,
      question: "A 5 kg object moving at 4 m/s collides elastically with a stationary 3 kg object. Find the velocities after collision.",
      answer: `
Elastic collision formulas:

v₁ = [(m₁ - m₂)/(m₁ + m₂)]u₁
v₂ = [2m₁/(m₁ + m₂)]u₁

v₁ =  = (2/8)(4) = 1 m/s
v₂ =  = 5 m/s
      `
    },
    {
      id: 2,
      question: "A 10 N force acts over 3 m on a block. How much work is done?",
      answer: `
Work formula:

W = Fd

W = 10 × 3
W = 30 J
      `
    },
    {
      id: 3,
      question: "A rollercoaster car of mass 500 kg goes from height 20 m to 5 m. What is the change in potential energy?",
      answer: `
ΔU = mgΔh

Δh = 5 - 20 = -15

ΔU = 500 × 9.8 × (-15)
ΔU = -73,500 J

The system loses 73,500 J of potential energy.
      `
    }
  ],

  unit4: [
    {
      id: 1,
      question: "A disk of radius 0.5 m and mass 2 kg rotates about its center with angular velocity 10 rad/s. What is its rotational kinetic energy?",
      answer: `
Moment of inertia of disk:

I = (1/2)MR²
I = 0.5 × 2 × (0.5)²
I = 0.25 kg·m²

Rotational KE:

KE = (1/2)Iω²
KE = 0.5 × 0.25 × 100
KE = 12.5 J
      `
    },
    {
      id: 2,
      question: "A torque of 5 N·m acts on a wheel with moment of inertia 2 kg·m². What is the angular acceleration?",
      answer: `
τ = Iα

α = τ / I
α = 5 / 2
α = 2.5 rad/s²
      `
    },
    {
      id: 3,
      question: "A rod of length 2 m rotates about one end. Calculate its moment of inertia.",
      answer: `
For a rod about one end:

I = (1/3)ML²

Substitute mass and L = 2 m:

I = (1/3)M(4)
I = (4/3)M
      `
    }
  ],

  unit5: [
    {
      id: 1,
      question: "A satellite orbits Earth at 7000 km from Earth's center. Calculate its orbital speed.",
      answer: `
Orbital speed:

v = √(GM/r)

Substitute constants:

v ≈ 7.5 km/s
      `
    },
    {
      id: 2,
      question: "Two masses, m1 = 5 kg and m2 = 10 kg, are separated by 2 m. What is the gravitational force between them?",
      answer: `
F = Gm₁m₂ / r²

F = (6.67×10⁻¹¹)(5)(10) / 4
F ≈ 8.3 × 10⁻¹⁰ N
      `
    },
    {
      id: 3,
      question: "What is the escape velocity from a planet with mass 6×10²⁴ kg and radius 6.4×10⁶ m?",
      answer: `
Escape velocity:

v = √(2GM/r)

Substitute values:

v ≈ 11.2 km/s
      `
    }
  ],
  unit6: [
  {
    id: 1,
    question: "A 0.5 kg mass is attached to a spring with k = 200 N/m. What is its period?",
    answer: `
T = 2π√(m/k)

T = 2π√(0.5/200)

T ≈ 0.314 s
`
  },
  {
    id: 2,
    question: "A pendulum has a length of 2 m. What is its period? (g = 9.8 m/s²)",
    answer: `
T = 2π√(L/g)

T = 2π√(2/9.8)

T ≈ 2.84 s
`
  },
  {
    id: 3,
    question: "What is the maximum speed of a 1 kg mass oscillating with amplitude 0.2 m and angular frequency 5 rad/s?",
    answer: `
v_max = Aω

v_max = 0.2 × 5

v_max = 1 m/s
`
  }
],

unit7: [
  {
    id: 1,
    question: "What is the electric force between two charges of 2 C and 3 C separated by 1 m? (k = 9×10⁹)",
    answer: `
F = kq₁q₂ / r²

F = (9×10⁹)(2)(3) / 1²

F = 5.4 × 10¹⁰ N
`
  },
  {
    id: 2,
    question: "What is the electric field 2 m away from a 5 C charge?",
    answer: `
E = kq / r²

E = (9×10⁹)(5) / 4

E = 1.125 × 10¹⁰ N/C
`
  },
  {
    id: 3,
    question: "Two identical charges repel with a force of 10 N at 0.5 m apart. What happens to the force if distance doubles?",
    answer: `
F ∝ 1 / r²

If r doubles → F becomes 1/4

New force = 2.5 N
`
  }
],

unit8: [
  {
    id: 1,
    question: "What is the electric flux through a closed surface enclosing 4 C of charge?",
    answer: `
Φ = Q / ε₀

Φ = 4 / (8.85 × 10⁻¹²)

Φ ≈ 4.52 × 10¹¹ N·m²/C
`
  },
  {
    id: 2,
    question: "What is the electric field inside a conductor at electrostatic equilibrium?",
    answer: `
Inside a conductor at equilibrium:

E = 0
`
  },
  {
    id: 3,
    question: "A Gaussian surface encloses no charge. What is the electric flux?",
    answer: `
Φ = Q / ε₀

Since Q = 0

Φ = 0
`
  }
],

unit9: [
  {
    id: 1,
    question: "What is the electric potential 2 m from a 6 C charge?",
    answer: `
V = kq / r

V = (9×10⁹)(6) / 2

V = 2.7 × 10¹⁰ V
`
  },
  {
    id: 2,
    question: "What is the potential energy of a 2 C charge placed in a 100 V potential?",
    answer: `
U = qV

U = 2 × 100

U = 200 J
`
  },
  {
    id: 3,
    question: "If a charge moves through a 50 V potential difference and gains 100 J of energy, what is the charge?",
    answer: `
U = qV

100 = q(50)

q = 2 C
`
  }
]

};



function getRandomPhysicsQuestion(unit) {
    console.log("Unit selected:", unit);
    if (unit === "unit1") {
        const randomIndex = Math.floor(Math.random() * apQuestions.unit1.length);
        return {
            question: apQuestions.unit1[randomIndex].question,
            answer: apQuestions.unit1[randomIndex].answer
        };
    } else if (unit === "unit2") {
        const randomIndex = Math.floor(Math.random() * apQuestions.unit2.length);
        return {
            question: apQuestions.unit2[randomIndex].question,
            answer: apQuestions.unit2[randomIndex].answer
        };
    } else if (unit === "unit3") {
        const unit3_questions = ["What is the equation for magnetic flux?"];
        const randomIndex = Math.floor(Math.random() * unit3_questions.length);
        return {
            question: apQuestions.unit3[randomIndex].question,
            answer: apQuestions.unit3[randomIndex].answer
        };
    } else if (unit === "unit4") {
        const randomIndex = Math.floor(Math.random() * apQuestions.unit4.length);
        return {
            question: apQuestions.unit4[randomIndex].question,
            answer: apQuestions.unit4[randomIndex].answer
        };
    } else if (unit === "unit5") {
        const randomIndex = Math.floor(Math.random() * apQuestions.unit5.length);
        return {
            question: apQuestions.unit5[randomIndex].question,
            answer: apQuestions.unit5[randomIndex].answer
        };
    } else if (unit === "unit6") {
        const randomIndex = Math.floor(Math.random() * apQuestions.unit6.length);
        return {
            question: apQuestions.unit6[randomIndex].question,
            answer: apQuestions.unit6[randomIndex].answer
        };
    } else if (unit === "unit7") {
        const randomIndex = Math.floor(Math.random() * apQuestions.unit7.length);
        return {
            question: apQuestions.unit7[randomIndex].question,
            answer: apQuestions.unit7[randomIndex].answer
        };
    } else if (unit === "unit8") {
        const randomIndex = Math.floor(Math.random() * apQuestions.unit8.length);
        return {
            question: apQuestions.unit8[randomIndex].question,
            answer: apQuestions.unit8[randomIndex].answer
        };
    } else if (unit === "unit9") {
        const randomIndex = Math.floor(Math.random() * apQuestions.unit9.length);
        return {
            question: apQuestions.unit9[randomIndex].question,
            answer: apQuestions.unit9[randomIndex].answer
        };
    } else {
        const allQuestions = Object.values(apQuestions).flat();
        const randomQuestion = allQuestions[Math.floor(Math.random() * allQuestions.length)];
        return {
            question: randomQuestion.question,
            answer: randomQuestion.answer
        };
    }
}

module.exports = getRandomPhysicsQuestion;