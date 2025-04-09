module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#0d1117",
          neon: "#39ff14",
          danger: "#ff004f",
          blue: "#1f6feb"
        },
        redteam: "#ff004f",
        blueteam: "#00f7ff"
      },
      fontFamily: {
        techno: ["'Orbitron'", "sans-serif"]
      }
    },
  },
  plugins: [],
}