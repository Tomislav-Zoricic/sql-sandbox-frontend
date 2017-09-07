module.exports = {
    "parser": "vue-eslint-parser",
    "parserOptions": {
      "sourceType": "module",
      "ecmaVersion": 6,
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "globalReturn": false,
          "impliedStrict": false,
          "jsx": false
      }
    },
    "rules": {
       "indent": ["error", 2],
       "comma-dangle": ["error", "never"]
    }
};
