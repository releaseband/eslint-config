# @releaseband/eslint-config

eslint shareable config

## Installing

```bash
npm i -D @releaseband/eslint-config
npx install-peerdeps --dev @releaseband/eslint-config
```

create `.eslintrc.js` file in the **root project folder**:

```js
module.exports = {
  extends: '@releaseband/eslint-config',
};
```

create `.eslintignore` file in the **root project folder**:

```text
node_modules/
.idea/
.vscode/
.history/
```

add script in `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --ext .js --fix"
  }
}
```
