const apQuestions = {
  unit1: [
    {
      id: 1,
      question:
        "A car accelerates uniformly from rest at 3 m/s². What is its speed after 5 seconds?",
      answer: `
Use kinematics:

v = at

Since it starts from rest (v₀ = 0):

v = 3 × 5
v = 15 m/s
      `,
    },
    {
      id: 2,
      question:
        "A 10 kg block is pulled along a frictionless surface with a 20 N force. What is its acceleration?",
      answer: `
Newton's Second Law:

F = ma

Solve for acceleration:

a = F / m
a = 20 / 10
a = 2 m/s²
      `,
    },
    {
      id: 3,
      question:
        "A car slows from 30 m/s to rest in 10 s. Find its acceleration and stopping distance.",
      answer: `
a = (v_f - v₀)/t = (0 - 30)/10 = -3 m/s²

Stopping distance:

s = v₀ t + 1/2 a t²
s = 30*10 + 0.5*(-3)*(10)²
s = 300 - 150 = 150 m
      `,
    },
    {
      id: 4,
      question:
        "A ball is thrown vertically upward with 20 m/s. Find max height and time to reach it.",
      answer: `
v = 0 at top

t = (v - v₀)/a = (0 - 20)/(-9.8) ≈ 2.04 s

h = v₀ t + 0.5 a t² = 20*2.04 - 0.5*9.8*2.04² ≈ 20.4 m
      `,
    },
    {
      id: 5,
      question:
        "A train accelerates from 0 to 60 m/s in 50 s. Find acceleration and distance traveled.",
      answer: `
a = Δv/Δt = (60-0)/50 = 1.2 m/s²

s = v₀ t + 0.5 a t² = 0 + 0.5*1.2*50² = 1500 m
      `,
    },
    {
      id: 6,
      question:
        "Two cars start from rest. Car A accelerates at 2 m/s², Car B at 3 m/s². After 10 s, how far apart are they?",
      answer: `
s = 0.5 a t²

s_A = 0.5*2*100 = 100 m
s_B = 0.5*3*100 = 150 m

Distance apart = 50 m
      `,
    },
    {
      id: 7,
      question:
        "A rocket accelerates at 5 m/s² for 8 s. What is its final velocity and distance traveled?",
      answer: `
v = a t = 5*8 = 40 m/s

s = 0.5 a t² = 0.5*5*64 = 160 m
      `,
    },
    {
      id: 8,
      question:
        "A ball rolls off a 10 m high table with horizontal speed 4 m/s. Find time to hit ground and horizontal distance.",
      answer: `
t = √(2h/g) = √(20/9.8) ≈ 1.43 s

x = v t = 4*1.43 ≈ 5.72 m
      `,
    },
    {
      id: 9,
      question:
        "A cyclist accelerates uniformly from 5 m/s to 15 m/s in 10 s. Find acceleration and distance.",
      answer: `
a = Δv / t = (15-5)/10 = 1 m/s²

s = v₀ t + 0.5 a t² = 5*10 + 0.5*1*100 = 50 + 50 = 100 m
      `,
    },
    {
      id: 10,
      question:
        "An object falls from rest from a 45 m tower. Find time to hit ground and velocity just before impact.",
      answer: `
t = √(2h/g) = √(90/9.8) ≈ 3.03 s

v = g t = 9.8*3.03 ≈ 29.7 m/s
      `,
    },
  ],

  unit2: [
    {
      id: 1,
      question:
        "A 2 kg mass oscillates on a spring with k = 50 N/m. What is its period of oscillation?",
      answer: `
T = 2π√(m/k)
T = 2π√(2/50) ≈ 1.26 s
      `,
    },
    {
      id: 2,
      question:
        "A block slides down a 30° frictionless incline. How long does it take to reach the bottom if h = 5 m?",
      answer: `
a = g sin(30°) = 4.9 m/s²

t = √(2h / a) ≈ 1.43 s
      `,
    },
    {
      id: 3,
      question:
        "A pendulum of length 1 m is released from 10°. Find the approximate period.",
      answer: `
T = 2π√(L/g) ≈ 2.01 s
      `,
    },
    {
      id: 4,
      question:
        "A 0.5 kg mass oscillates with amplitude 0.1 m and period 2 s. Find max speed.",
      answer: `
v_max = A ω
ω = 2π / T = π rad/s
v_max = 0.1 * π ≈ 0.314 m/s
      `,
    },
    {
      id: 5,
      question:
        "A 1 kg mass on spring with k=200 N/m. Find frequency and angular frequency.",
      answer: `
ω = √(k/m) = √(200/1) ≈ 14.14 rad/s
f = ω/(2π) ≈ 2.25 Hz
      `,
    },
    {
      id: 6,
      question:
        "Two pendulums have lengths 1 m and 4 m. Compare their periods.",
      answer: `
T₁/T₂ = √(L₁/L₂) = √(1/4) = 0.5

T₁ = half of T₂
      `,
    },
    {
      id: 7,
      question:
        "A mass oscillates with amplitude 0.2 m, ω=5 rad/s. Find max acceleration.",
      answer: `
a_max = A ω² = 0.2 * 25 = 5 m/s²
      `,
    },
    {
      id: 8,
      question: "A pendulum has period 3 s. Find length of pendulum.",
      answer: `
T = 2π√(L/g) → L = (T/(2π))² g
L = (3/6.283)² * 9.8 ≈ 2.22 m
      `,
    },
    {
      id: 9,
      question:
        "A 0.3 kg mass oscillates with k=50 N/m. Find total energy if amplitude is 0.1 m.",
      answer: `
E = 0.5 k A² = 0.5*50*0.01 = 0.25 J
      `,
    },
    {
      id: 10,
      question:
        "A mass-spring system has v_max = 2 m/s, amplitude 0.4 m. Find ω.",
      answer: `
v_max = A ω → ω = v_max / A = 2 / 0.4 = 5 rad/s
      `,
    },
  ],

  unit3: [
    {
      id: 1,
      question:
        "A 5 kg object moving at 4 m/s collides elastically with a stationary 3 kg object. Find the velocities after collision.",
      answer: `
Elastic collision formulas:

v₁ = [(m₁ - m₂)/(m₁ + m₂)]u₁
v₂ = [2m₁/(m₁ + m₂)]u₁

v₁ ≈ 1 m/s, v₂ ≈ 5 m/s
      `,
    },
    {
      id: 2,
      question: "A 10 N force acts over 3 m on a block. How much work is done?",
      answer: `
W = Fd = 10*3 = 30 J
      `,
    },
    {
      id: 3,
      question:
        "A rollercoaster car of mass 500 kg goes from height 20 m to 5 m. Find ΔPE.",
      answer: `
ΔU = mgΔh = 500*9.8*(-15) = -73,500 J
      `,
    },
    {
      id: 4,
      question:
        "A 2 kg block slides down a frictionless ramp of 3 m height. Find speed at bottom.",
      answer: `
Conservation of energy:

mgh = 0.5 m v²
v = √(2gh) = √(2*9.8*3) ≈ 7.67 m/s
      `,
    },
    {
      id: 5,
      question:
        "A car of mass 1000 kg accelerates at 2 m/s². How much work is done after 50 m?",
      answer: `
W = F d = m a d = 1000*2*50 = 100,000 J
      `,
    },
    {
      id: 6,
      question:
        "A 5 kg block collides inelastically with a 3 kg block at rest. Find final velocity.",
      answer: `
Conservation of momentum:

v_f = (m₁u₁ + m₂u₂)/(m₁ + m₂)
v_f = (5*4 + 3*0)/(8) = 2.5 m/s
      `,
    },
    {
      id: 7,
      question:
        "A 2 kg mass moves in circular path radius 0.5 m at 4 m/s. Find centripetal force.",
      answer: `
F_c = m v² / r = 2*16/0.5 = 64 N
      `,
    },
    {
      id: 8,
      question:
        "A ball of 0.2 kg is thrown with 10 m/s at 30°. Find KE and PE at max height.",
      answer: `
v_y = v sin θ = 10*0.5 = 5 m/s
KE = 0.5 m v² = 0.5*0.2*100 = 10 J
PE_max = m g h_max = 0.2*9.8*(5²/(2*9.8)) = 2.5 J
      `,
    },
    {
      id: 9,
      question:
        "A 1 kg mass slides down frictionless 5 m ramp. Find velocity at bottom.",
      answer: `
v = √(2 g h) = √(2*9.8*5) ≈ 9.9 m/s
      `,
    },
    {
      id: 10,
      question:
        "A 3 kg mass on incline 30° experiences friction 5 N. Find acceleration.",
      answer: `
a = (mg sin θ - f)/m = (3*9.8*0.5 - 5)/3 ≈ 4.4 m/s²
      `,
    },
  ],

  unit4: [
    {
      id: 1,
      question:
        "A disk of radius 0.5 m and mass 2 kg rotates about its center with angular velocity 10 rad/s. What is its rotational kinetic energy?",
      answer: `
I = 0.5 * M * R² = 0.5 * 2 * 0.5² = 0.25 kg·m²
KE = 0.5 * I * ω² = 0.5 * 0.25 * 100 = 12.5 J
      `,
    },
    {
      id: 2,
      question:
        "A torque of 5 N·m acts on a wheel with moment of inertia 2 kg·m². What is the angular acceleration?",
      answer: `
τ = I * α → α = τ/I = 5/2 = 2.5 rad/s²
      `,
    },
    {
      id: 3,
      question:
        "A rod of length 2 m rotates about one end. Calculate its moment of inertia.",
      answer: `
I = (1/3) M L² = (1/3) M * 4 = (4/3) M
      `,
    },
    {
      id: 4,
      question:
        "A wheel of 3 kg mass and radius 0.2 m spins at 15 rad/s. Find rotational KE.",
      answer: `
I = 0.5 * 3 * 0.2² = 0.06 kg·m²
KE = 0.5 * 0.06 * 225 ≈ 6.75 J
      `,
    },
    {
      id: 5,
      question:
        "A yo-yo of mass 0.1 kg and radius 0.02 m unwinds with angular acceleration 50 rad/s². Find torque.",
      answer: `
τ = I * α = 0.5 * 0.1 * 0.02² * 50 ≈ 0.001 N·m
      `,
    },
    {
      id: 6,
      question:
        "A solid sphere rolls down a 2 m high incline. Find speed at bottom.",
      answer: `
v = √(10/7 * g * h) = √(10/7 * 9.8 * 2) ≈ 5.28 m/s
      `,
    },
    {
      id: 7,
      question:
        "A pendulum of mass 2 kg swings through 0.5 m height. Find angular velocity at bottom.",
      answer: `
m g h = 0.5 m v² → v = √(2 g h) ≈ √(2*9.8*0.5) ≈ 3.13 m/s
ω = v/R = 3.13 / 1 ≈ 3.13 rad/s
      `,
    },
    {
      id: 8,
      question:
        "A rotating disk slows from 20 rad/s to rest in 10 s. Find angular deceleration.",
      answer: `
α = (ω_f - ω₀)/t = (0 - 20)/10 = -2 rad/s²
      `,
    },
    {
      id: 9,
      question:
        "A wheel of radius 0.5 m rolls without slipping at 4 m/s. Find ω.",
      answer: `
v = R ω → ω = v/R = 4/0.5 = 8 rad/s
      `,
    },
    {
      id: 10,
      question:
        "A solid cylinder rolls down incline 30°, height 1 m. Find speed at bottom.",
      answer: `
v = √(4/3 g h) = √(4/3*9.8*1) ≈ 3.61 m/s
      `,
    },
  ],

  unit5: [
    {
      id: 1,
      question:
        "A satellite orbits Earth at 7000 km from Earth's center. Calculate its orbital speed.",
      answer: `
v = √(GM/r) ≈ 7.5 km/s
      `,
    },
    {
      id: 2,
      question:
        "Two masses, m1 = 5 kg and m2 = 10 kg, are separated by 2 m. What is gravitational force?",
      answer: `
F = G m₁ m₂ / r² ≈ 8.3 × 10⁻¹⁰ N
      `,
    },
    {
      id: 3,
      question: "Escape velocity from planet M = 6×10²⁴ kg, R = 6.4×10⁶ m?",
      answer: `
v = √(2GM/r) ≈ 11.2 km/s
      `,
    },
    {
      id: 4,
      question:
        "Gravitational potential energy of 3 kg mass 10 m above Earth surface?",
      answer: `
U = m g h = 3*9.8*10 = 294 J
      `,
    },
    {
      id: 5,
      question: "Force on 1 kg mass 2 m from 5 kg mass?",
      answer: `
F = G m₁ m₂ / r² ≈ 8.35 × 10⁻¹¹ N
      `,
    },
    {
      id: 6,
      question:
        "Satellite of mass 500 kg in circular orbit radius 10⁷ m. Find orbital period.",
      answer: `
T = 2π √(r³/GM) ≈ 2π √(10²¹ / 6.67e-11*6e24) ≈ 7.68e3 s
      `,
    },
    {
      id: 7,
      question:
        "Two planets, m1 = m2 = 10²⁴ kg, distance = 10⁷ m. Find force and acceleration on m1.",
      answer: `
F = G m₁ m₂ / r² ≈ 6.67 N
a = F/m = 6.67/1e24 ≈ 6.67e-24 m/s²
      `,
    },
    {
      id: 8,
      question: "A mass falls freely from 50 m. Find impact velocity.",
      answer: `
v = √(2 g h) = √(2*9.8*50) ≈ 31.3 m/s
      `,
    },
    {
      id: 9,
      question:
        "A rocket of mass 1000 kg fired with 2000 N. Find acceleration ignoring gravity.",
      answer: `
a = F/m = 2000/1000 = 2 m/s²
      `,
    },
    {
      id: 10,
      question:
        "Two masses 10 kg and 15 kg are 5 m apart. Find gravitational force.",
      answer: `
F = G m₁ m₂ / r² ≈ 4 × 10⁻¹⁰ N
      `,
    },
  ],

  unit6: [
    {
      id: 1,
      question: "0.5 kg mass on spring with k = 200 N/m. Find period.",
      answer: `
T = 2π √(m/k) ≈ 0.314 s
      `,
    },
    {
      id: 2,
      question: "Pendulum length 2 m. Find period.",
      answer: `
T = 2π √(L/g) ≈ 2.84 s
      `,
    },
    {
      id: 3,
      question: "Max speed of 1 kg mass oscillating A=0.2 m, ω=5 rad/s?",
      answer: `
v_max = A ω = 0.2*5 = 1 m/s
      `,
    },
    {
      id: 4,
      question: "Mass-spring amplitude 0.1 m, T=2 s. Find max acceleration.",
      answer: `
ω = 2π/T = π
a_max = A ω² = 0.1*π² ≈ 0.986 m/s²
      `,
    },
    {
      id: 5,
      question: "Pendulum of 0.5 m length. Find g if T=1.42 s.",
      answer: `
T = 2π √(L/g) → g = 4π² L / T² ≈ 6.15 m/s²
      `,
    },
    {
      id: 6,
      question: "Spring k=100 N/m, m=0.25 kg. Find ω and f.",
      answer: `
ω = √(k/m) = √(100/0.25) = 20 rad/s
f = ω/2π ≈ 3.18 Hz
      `,
    },
    {
      id: 7,
      question: "Simple pendulum length 1.5 m, T=2.5 s. Find local g.",
      answer: `
g = 4π² L / T² ≈ 9.5 m/s²
      `,
    },
    {
      id: 8,
      question: "Oscillating mass has v_max=2 m/s, A=0.4 m. Find ω.",
      answer: `
ω = v_max / A = 2/0.4 = 5 rad/s
      `,
    },
    {
      id: 9,
      question: "Mass-spring E_total=0.5 J, k=50 N/m. Find amplitude.",
      answer: `
E = 0.5 k A² → A = √(2E/k) = √(1/50) ≈ 0.141 m
      `,
    },
    {
      id: 10,
      question: "Pendulum length 1 m. Max speed = 2 m/s. Find amplitude.",
      answer: `
v_max = √(2 g h) → h = v_max² / 2g = 4/19.6 ≈ 0.204 m
A = h ≈ 0.204 m
      `,
    },
  ],

  unit7: [
    {
      id: 1,
      question: "Charges 2 C and 3 C separated by 1 m. Find force.",
      answer: `
F = k q₁ q₂ / r² = 9e9*2*3 / 1 = 5.4e10 N
      `,
    },
    {
      id: 2,
      question: "Electric field 2 m from 5 C charge?",
      answer: `
E = k q / r² = 9e9*5 / 4 ≈ 1.125e10 N/C
      `,
    },
    {
      id: 3,
      question:
        "Two identical charges repel with F=10 N at 0.5 m. If distance doubles?",
      answer: `
F_new = F / 4 = 2.5 N
      `,
    },
    {
      id: 4,
      question:
        "Three point charges at triangle vertices. Find net force on one.",
      answer: `
Use Coulomb's law for each pair and sum vectorially.
      `,
    },
    {
      id: 5,
      question: "Point charge +1 μC in uniform field E=200 N/C. Find force.",
      answer: `
F = qE = 1e-6 * 200 = 0.0002 N
      `,
    },
    {
      id: 6,
      question:
        "Two charges 3 μC and -2 μC 4 m apart. Find force and direction.",
      answer: `
F = k |q₁ q₂| / r² ≈ 3.375 N, attractive
      `,
    },
    {
      id: 7,
      question:
        "Charge +5 μC in E = 100 N/C. Find acceleration if mass 0.01 kg.",
      answer: `
F = qE = 5e-6*100=0.0005 N, a = F/m = 0.05 m/s²
      `,
    },
    {
      id: 8,
      question: "Two charges 1 C and 2 C 3 m apart. Find potential energy.",
      answer: `
U = k q₁ q₂ / r = 9e9 * 1 * 2 / 3 ≈ 6e9 J
      `,
    },
    {
      id: 9,
      question: "Point charge +2 μC at origin. Find E at (1,1) m.",
      answer: `
E = k q / r², r = √2 m → E ≈ 6.36 N/C along radial direction
      `,
    },
    {
      id: 10,
      question: "A dipole in uniform field E = 100 N/C. Torque = ?",
      answer: `
τ = p × E. Use p = q d. τ depends on angle, max τ = p E
      `,
    },
  ],

  unit8: [
    {
      id: 1,
      question: "Spherical shell radius 2 m, charge 6 μC. E at 1 m?",
      answer: `
Inside shell: E = 0 (Gauss's law)
      `,
    },
    {
      id: 2,
      question: "Long cylinder charge density λ = 5 μC/m. E at r=0.1 m?",
      answer: `
E = λ / (2 π ε₀ r) ≈ 8.99e6 N/C
      `,
    },
    {
      id: 3,
      question: "Plane sheet uniform σ. E near sheet?",
      answer: `
E = σ / (2 ε₀)
      `,
    },
    {
      id: 4,
      question: "Gaussian surface encloses 0 charge. Electric flux?",
      answer: `
Φ = Q/ε₀ = 0
      `,
    },
    {
      id: 5,
      question:
        "Spherical shell r = 3 m, charge Q=12 μC. Flux through surface r=5 m?",
      answer: `
Φ = Q/ε₀ = 12e-6 / 8.85e-12 ≈ 1.36e6 N·m²/C
      `,
    },
    {
      id: 6,
      question: "Cylinder radius 0.2 m, λ=2 μC/m. E at surface?",
      answer: `
E = λ / (2 π ε₀ r) ≈ 1.8e5 N/C
      `,
    },
    {
      id: 7,
      question: "Charge inside conductor. E = ?",
      answer: `
E = 0 at electrostatic equilibrium
      `,
    },
    {
      id: 8,
      question: "Thin sheet, σ = 5 μC/m². Find E above sheet.",
      answer: `
E = σ / (2 ε₀) ≈ 2.83e5 N/C
      `,
    },
    {
      id: 9,
      question: "Spherical shell radius 1 m, total charge 3 μC. E at surface?",
      answer: `
E = k Q / r² = 9e9*3e-6 / 1² = 27,000 N/C
      `,
    },
    {
      id: 10,
      question: "Gaussian cube, enclosed Q=6 μC. Flux through one face?",
      answer: `
Φ_total = Q/ε₀ = 6e-6/8.85e-12 ≈ 6.78e5 N·m²/C
Each face = Φ_total/6 ≈ 1.13e5 N·m²/C
      `,
    },
  ],

  unit9: [
    {
      id: 1,
      question: "Electric potential 2 m from 6 C charge?",
      answer: `
V = k q / r = 9e9*6/2 = 2.7e10 V
      `,
    },
    {
      id: 2,
      question: "Potential energy of 2 C in 100 V?",
      answer: `
U = qV = 2*100 = 200 J
      `,
    },
    {
      id: 3,
      question:
        "Charge moves through 50 V potential difference, gains 100 J. Find q.",
      answer: `
q = U/V = 100/50 = 2 C
      `,
    },
    {
      id: 4,
      question:
        "Two point charges 1 C and 2 C separated by 2 m. Find potential at midpoint.",
      answer: `
V = k q₁/r₁ + k q₂/r₂ = 9e9*(1/1 + 2/1) = 27e9 V
      `,
    },
    {
      id: 5,
      question: "Charge +3 μC moves in potential 20 V → 0 V. Work done?",
      answer: `
W = q ΔV = 3e-6*(0-20) = -6e-5 J
      `,
    },
    {
      id: 6,
      question: "Capacitor Q=2 μC, V=10 V. Energy stored?",
      answer: `
U = 0.5 Q V = 0.5*2e-6*10 = 1e-5 J
      `,
    },
    {
      id: 7,
      question: "Electron moves through 500 V. KE gained?",
      answer: `
ΔKE = q ΔV = 1.6e-19 * 500 ≈ 8e-17 J
      `,
    },
    {
      id: 8,
      question: "Potential at distance 0.5 m from 4 C charge?",
      answer: `
V = k q / r = 9e9*4 / 0.5 ≈ 7.2e10 V
      `,
    },
    {
      id: 9,
      question: "Two charges +1 C and -2 C, 3 m apart. Potential at midpoint?",
      answer: `
V = k(1/1.5 + -2/1.5) ≈ -6e9 V
      `,
    },
    {
      id: 10,
      question: "Capacitor 5 μF charged to 12 V. Find energy stored.",
      answer: `
U = 0.5 C V² = 0.5*5e-6*12² ≈ 3.6e-4 J
      `,
    },
  ],
};

function getRandomPhysicsQuestion(unit) {
  console.log("Unit selected:", unit);
  if (unit === "unit1") {
    const randomIndex = Math.floor(Math.random() * apQuestions.unit1.length);
    return {
      question: apQuestions.unit1[randomIndex].question,
      answer: apQuestions.unit1[randomIndex].answer,
    };
  } else if (unit === "unit2") {
    const randomIndex = Math.floor(Math.random() * apQuestions.unit2.length);
    return {
      question: apQuestions.unit2[randomIndex].question,
      answer: apQuestions.unit2[randomIndex].answer,
    };
  } else if (unit === "unit3") {
    const unit3_questions = ["What is the equation for magnetic flux?"];
    const randomIndex = Math.floor(Math.random() * unit3_questions.length);
    return {
      question: apQuestions.unit3[randomIndex].question,
      answer: apQuestions.unit3[randomIndex].answer,
    };
  } else if (unit === "unit4") {
    const randomIndex = Math.floor(Math.random() * apQuestions.unit4.length);
    return {
      question: apQuestions.unit4[randomIndex].question,
      answer: apQuestions.unit4[randomIndex].answer,
    };
  } else if (unit === "unit5") {
    const randomIndex = Math.floor(Math.random() * apQuestions.unit5.length);
    return {
      question: apQuestions.unit5[randomIndex].question,
      answer: apQuestions.unit5[randomIndex].answer,
    };
  } else if (unit === "unit6") {
    const randomIndex = Math.floor(Math.random() * apQuestions.unit6.length);
    return {
      question: apQuestions.unit6[randomIndex].question,
      answer: apQuestions.unit6[randomIndex].answer,
    };
  } else if (unit === "unit7") {
    const randomIndex = Math.floor(Math.random() * apQuestions.unit7.length);
    return {
      question: apQuestions.unit7[randomIndex].question,
      answer: apQuestions.unit7[randomIndex].answer,
    };
  } else if (unit === "unit8") {
    const randomIndex = Math.floor(Math.random() * apQuestions.unit8.length);
    return {
      question: apQuestions.unit8[randomIndex].question,
      answer: apQuestions.unit8[randomIndex].answer,
    };
  } else if (unit === "unit9") {
    const randomIndex = Math.floor(Math.random() * apQuestions.unit9.length);
    return {
      question: apQuestions.unit9[randomIndex].question,
      answer: apQuestions.unit9[randomIndex].answer,
    };
  } else {
    const allQuestions = Object.values(apQuestions).flat();
    const randomQuestion =
      allQuestions[Math.floor(Math.random() * allQuestions.length)];
    return {
      question: randomQuestion.question,
      answer: randomQuestion.answer,
    };
  }
}

module.exports = getRandomPhysicsQuestion;
