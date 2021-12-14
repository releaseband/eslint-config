# Installing

create [.npmrc](https://docs.npmjs.com/cli/v7/configuring-npm/npmrc) file in the **root project folder**:

```
echo @releaseband:registry=https://npm.pkg.github.com > .npmrc
```

```
npm i @releaseband/eslint-config -D
npx install-peerdeps --dev @releaseband/eslint-config
```

`.eslintrc.js`:

```js
module.exports = {
  extends: '@releaseband/eslint-config',
  parserOptions: {
    project: './tsconfig.json',
  },
};
```

`package.json`:

```js
{
  "scripts": {
    "lint": "eslint . --ext .js,.ts --ignore-path .eslintignore",
    "lint:fix": "npm run lint --  --fix"
  }
}
```
