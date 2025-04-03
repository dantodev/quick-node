import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  js.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: { ...globals.node }
    },
    rules: {
      "prettier/prettier": "warn",
      "prefer-const": "warn",
      "no-prototype-builtins": "off",
      "no-case-declarations": "off",
      "no-unused-vars": ["error", { caughtErrors: "none" }],
      "no-empty": ["error", { allowEmptyCatch: true }]
    }
  }
]);
