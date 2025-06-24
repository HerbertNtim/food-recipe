import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    languageOptions: {
      ecmaVersion: 2025,
      globals: {
        ...globals.node,
        ...globals.es2025,
      },
    },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    ignores: ["**/node_modules/**", "**/dist/**"],
  }
]);
