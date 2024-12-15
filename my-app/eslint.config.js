module.exports = {
  ignores: ['dist', 'node_modules'],
  overrides: [
    {
      files: ['**/*.{js,jsx}'],
      languageOptions: {
        ecmaVersion: 2020,
        globals: require('globals').browser,
        parserOptions: {
          ecmaVersion: 'latest',
          ecmaFeatures: { jsx: true },
          sourceType: 'module',
        },
      },
      settings: { react: { version: 'detect' } },
      plugins: {
        react: require('eslint-plugin-react'),
        'react-hooks': require('eslint-plugin-react-hooks'),
        'react-refresh': require('eslint-plugin-react-refresh'),
        '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      },
      rules: {
        ...require('@eslint/js').configs.recommended.rules,
        ...require('eslint-plugin-react').configs.recommended.rules,
        ...require('eslint-plugin-react').configs['jsx-runtime'].rules,
        ...require('eslint-plugin-react-hooks').configs.recommended.rules,
        'react/jsx-no-target-blank': 'off',
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
        'no-unused-vars': [
          'error',
          { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
        ],
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
};
