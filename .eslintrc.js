module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["cypress", "extra-rules", "import", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:cypress/recommended",
    "plugin:chai-friendly/recommended",
  ],
  ignorePatterns: [],
  rules: {
    "sort-imports": "off",
    "no-use-before-define": "off",
    "no-unused-expressions": "off",
    "cypress/unsafe-to-chain-command": "off",
    "cypress/no-unnecessary-waiting": "off",
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "@garantme/**",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        parser: "flow",
      },
    ],
  },
  env: {
    node: true,
    jest: true,
  },
};
