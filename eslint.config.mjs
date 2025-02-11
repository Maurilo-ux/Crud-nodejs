import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.node }
  ,
  rules: {
    "no-unused-vars": ["error",{argsIgnorePatten: "next"}],
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
  },
},
  pluginJs.configs.recommended,
];