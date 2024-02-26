import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        marqueeKeyframe: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        rotation1: {
          '0%,100%': { transform: 'translateX(0) translateY(0px)' },
          '30%': { transform: 'translateX(150px) translateY(100px)' },
          '50%': { transform: 'translateX(300px) translateY(0px)' },
          '75%': { transform: 'translateX(150px) translateY(-100px)' },
        },
        rotation2: {
          '0%,100%': { transform: 'translateX(0) translateY(0px)' },
          '45%': { transform: 'translateX(120px) translateY(200px)' },
          // '50%': { transform: 'translateX(-600x) translateY(0px)' },
          '65%': { transform: 'translateX(80px) translateY(300px)' },
        },
        rotation3: {
          '0%,100%': { transform: 'translateX(0) translateY(0px)' },
          '20%': { transform: 'translateX(-50px) translateY(100px)' },
          // '50%': { transform: 'translateX(-600x) translateY(0px)' },
          '80%': { transform: 'translateX(50px) translateY(80px)' },
        },
        rotation4: {
          '0%,100%': { transform: 'translateX(0) translateY(0px)' },
          '23%': { transform: 'translateX(70px) translateY(80px)' },
          // '50%': { transform: 'translateX(-600x) translateY(0px)' },
          '90%': { transform: 'translateX(20px) translateY(10px)' },
        },
      },
      animation: {
        'marquee': 'marqueeKeyframe 10s linear infinite',
        'rotation1': 'rotation1 10s linear infinite',
        'rotation2': 'rotation2 10s linear infinite',
        'rotation3': 'rotation3 8s linear infinite',
        'rotation4': 'rotation4 10s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
