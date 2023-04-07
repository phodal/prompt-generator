module.exports = {
  root: true,
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  rules: {
    "react-hooks/exhaustive-deps": "off",
    "no-console": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
