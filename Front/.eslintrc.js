module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        },

    },
    "overrides": [
        {
            "files": ['*.@(ts|tsx|js|jsx|mjs|cjs)'],
            "rules": {
                "import/no-extraneous-dependencies": "off",
                "@typescript-eslint/prefer-as-const": "off",

            }
        }
    ],
    "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended", "plugin:import/recommended", "prettier", "plugin:import/typescript"],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ["react", "@typescript-eslint"],
    "rules": {
        "import/no-unresolved": "off",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        'react/jsx-filename-extension': [2, {
            'extensions': ['.js', '.jsx', '.ts', '.tsx']
        }],
        "@typescript-eslint/no-explicit-any": ["off"],
        "@typescript-eslint/no-unused-vars": "off",
        "react-hooks/exhaustive-deps": 0,
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/prefer-as-const": "off",
    }
};
