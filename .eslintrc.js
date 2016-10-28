module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
      "sourceType": "module"
    },
    "env": {
      "browser": true,
      "es6": true,
      "jquery": true
    },
    "rules": {
      "strict": 0,
      "no-console": "warn",
      "comma-dangle": [
        "warn",
        "never"
      ],
      "indent": [
        "warn",
        2
      ],
      "linebreak-style": [
        "warn",
        "unix"
      ],
      "quotes": [
        "error",
        "single"
      ],
      "semi": [
        "error",
        "always"
      ],
      "no-unused-expressions": "warn",
      "no-useless-concat": "warn",
      "block-scoped-var": "error",
      "consistent-return": "error"
    }
};