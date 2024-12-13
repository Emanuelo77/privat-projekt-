import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Ignoră anumite directoare sau fișiere
  { ignores: ['dist', 'node_modules'] },
  {
    files: ['**/*.{js,jsx}'], // Targetează fișierele .js și .jsx
    languageOptions: {
      ecmaVersion: 2020, // Versiunea ECMAScript
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true }, // Suport pentru JSX
        sourceType: 'module', // Folosește sistemul de module
      },
    },
    settings: { react: { version: 'detect' } }, // Detectează automat versiunea React
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Reguli recomandate
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // Reguli personalizate
      'react/jsx-no-target-blank': 'off', // Nu raporta erori pentru "target=_blank"
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-unused-vars': [
        'error',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
      ],
      'react/react-in-jsx-scope': 'off', // Nu mai este necesar importul de React (pentru React 17+)
    },
  },
];
