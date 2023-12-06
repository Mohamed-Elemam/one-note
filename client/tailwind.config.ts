import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {
 
  },
};
export default config;
