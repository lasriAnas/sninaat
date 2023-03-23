/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        firstframe: "url('/dentist-with-smile.jpg')",
        firstframeSM:
          "url('/young-female-patient-having-dental-procedure-orthodontist.jpg')",
        info: "url('/pexels-anna-shvets-3845735_1480x850.webp')",
        infoSM: "url('/dentist-doing-check-up-patient.jpg')",
      },
    },
  },
  plugins: [],
};
