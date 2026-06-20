import js from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        require: "readonly",
        console: "readonly",
      },
    },
    ...js.configs.recommended,
  },
];
