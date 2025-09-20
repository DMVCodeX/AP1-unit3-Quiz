import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  // Ignore the build/dist folder
  globalIgnores(["dist"]),

  // Main ESLint config for JS/JSX files
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended, // Basic recommended ESLint rules
      reactHooks.configs["recommended-latest"], // React hooks rules
      reactRefresh.configs.vite, // Vite + React refresh rules
      "plugin:react/recommended", // React-specific rules
    ],
    languageOptions: {
      ecmaVersion: 2021,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    env: {
      browser: true,
      es2021: true,
    },
    plugins: ["react"],
    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      // Add more custom rules here if needed
    },
  },
]);
