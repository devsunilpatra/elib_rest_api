import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{ts,js}"],
    languageOptions: {
      globals: globals.node
    }
  },
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-unused-vars": ["warn"]
    }
  }
]);
