
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        //"project": "tsconfig.json",
        //"tsconfigRootDir": "__dirname",
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    },
    };

