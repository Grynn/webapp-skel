module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "settings": {
        "import/resolver": "webpack"
    },
    "rules": {
        "global-require": "off"
    },
    "env": {
        "browser": true,
        "commonjs": true 
    } 
};