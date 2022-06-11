module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "prettier", "next"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "12",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4],
        quotes: ["error", "double"],
        "max-len": [
            "error",
            {
                ignoreComments: true,
                ignoreStrings: true,
                ignoreUrls: true,
                ignoreTemplateLiterals: true
            }
        ],
        "comma-dangle": [
            "error",
            {
                arrays: "never",
                objects: "never",
                imports: "never",
                exports: "never",
                functions: "never"
            }
        ],
        "react/no-danger": 0,
        "no-console": 0,
        "import/prefer-default-export": 0,
        "@next/next/no-page-custom-font": 0,
        "prefer-regex-literals": 0
    }
};
