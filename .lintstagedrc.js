module.exports = {
  '*': 'prettier --write --ignore-unknown',
  '*.js': 'eslint --fix',
  '*.md': 'markdownlint --fix',
};
