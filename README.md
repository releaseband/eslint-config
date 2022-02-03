# @releaseband/eslint-config

eslint shareable config

## Installing

```bash
npm i -D @releaseband/eslint-config
npx install-peerdeps --dev @releaseband/eslint-config
```

create `eslintrc.js` file in the **root project folder**:

```js
module.exports = {
  extends: '@releaseband/eslint-config',
};
```

`package.json`:

```json
{
  "scripts": {
    "lint": "eslint --ext .js --ignore-path ./.gitignore .",
    "lint:fix": "npm run lint --  --fix"
  }
}
```
