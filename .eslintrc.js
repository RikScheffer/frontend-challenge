module.exports = {
    root: true,
    plugins: [
        'unused-imports',
        'react',
        'import',
        'prefer-arrow-functions',
        'jest',
        'sonarjs',
        'prettier',
        '@stylexjs',
    ],
    extends: ['plugin:react/jsx-runtime', 'plugin:sonarjs/recommended'],
    rules: {
        'react/jsx-uses-react': 'error',
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        'prettier/prettier': 'warn',
        '@stylexjs/valid-styles': ['error'],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            rules: {
                '@typescript-eslint/no-unused-vars': 'off',
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/no-misused-promises': 'off',
            },
            parserOptions: {
                project: ['./tsconfig.json'],
            },
        },
    ],
    ignorePatterns: ['build/*'],
    env: {
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
    },
}
