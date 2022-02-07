module.exports = {
  '*': 'prettier --write --ignore-unknown',
  '*.{js,jsx,ts,tsx}': 'eslint --fix',
  '*.md': 'markdownlint --fix',
};
