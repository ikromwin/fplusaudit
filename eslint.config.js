// eslint.config.js
import js from "@eslint/js"; // ✅ Import ESLint's built-in JS rules
import pluginReact from "eslint-plugin-react"; // ✅ Import React plugin
import globals from "globals"; // ✅ Import browser globals
import unusedImports from "eslint-plugin-unused-imports"; // ✅ Detect and remove unused imports

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    ignores: ["dist/**"],
    ...js.configs.recommended, // ✅ Apply JS recommended rules
    languageOptions: {
      globals: globals.browser
    },
    plugins: {
      "unused-imports": unusedImports
    },
    rules: {
      // Base JS
      "no-unused-vars": [
        "warn",
        { vars: "all", args: "after-used", ignoreRestSiblings: false }
      ],
      // Prefer plugin to catch unused imports directly
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { args: "after-used", argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ]
    }
  },
  {
    files: ["**/*.{jsx,js}"],
    ...pluginReact.configs.flat.recommended, // ✅ Apply React recommended rules
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      // React 17+ new JSX transform doesn't require React in scope
      "react/react-in-jsx-scope": "off",
      // Project does not use PropTypes
      "react/prop-types": "off"
    }
  }
];
