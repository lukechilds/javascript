# eslint-config-unsplash

[![npm](https://img.shields.io/npm/v/eslint-config-unsplash.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-unsplash)
[![npm](https://img.shields.io/npm/dm/eslint-config-unsplash.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-unsplash)
[![Codeship](https://img.shields.io/codeship/be68ebe0-b655-0133-e189-7a4b33b8d70b/master.svg?style=flat-square)](https://codeship.com/projects/be68ebe0-b655-0133-e189-7a4b33b8d70b/status?branch=master)

This package holds Unsplash's ESLint config.

## Installation
```
npm i --save-dev eslint eslint-config-unsplash
```

## Usage
To get started, extend Unsplash's configuration in you `.eslintrc`.

```json
{
  "extends": "unsplash"
}
```

Now that you're setup, running the following will lint your code.

```bash
./node_modules/.bin/eslint .
```

## The Rules
See [Unsplash's JavaScript Style Guide](https://github.com/unsplash/javascript).
