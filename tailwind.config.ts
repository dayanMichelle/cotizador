import { TailwindConfig } from "tailwindcss/tailwind-config";

const config: TailwindConfig = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
  },
};

module.exports = config;
