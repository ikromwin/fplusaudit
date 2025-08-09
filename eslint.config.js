// eslint.config.js
import js from "@eslint/js"; // ✅ Import ESLint's built-in JS rules
import pluginReact from "eslint-plugin-react"; // ✅ Import React plugin
import globals from "globals"; // ✅ Import browser globals

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    ...js.configs.recommended, // ✅ Apply JS recommended rules
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      "no-unused-vars": [
        "warn",
        { vars: "all", args: "after-used", ignoreRestSiblings: false }
      ]
    }
  },
  {
    files: ["**/*.{jsx,js}"],
    ...pluginReact.configs.flat.recommended // ✅ Apply React recommended rules
  }
];
