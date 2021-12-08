# Installing

create [.npmrc](https://docs.npmjs.com/cli/v7/configuring-npm/npmrc) file in the **root project folder**:

```
echo @releaseband:registry=https://npm.pkg.github.com > .npmrc
```

```
npm i -D @releaseband/eslint-config
npx install-peerdeps --dev @releaseband/eslint-config
```

`.eslintrc.js`:

```js
module.exports = {
  extends: '@releaseband/eslint-config',
};
```
