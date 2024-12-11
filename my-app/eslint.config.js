import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Ignoriere bestimmte Ordner oder Dateien
  { ignores: ['dist', 'node_modules'] },
  {
    files: ['**/*.{js,jsx}'], // Ziel-Dateitypen
    languageOptions: {
      ecmaVersion: 2020, // ECMAScript-Version
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true }, // JSX-Unterstützung
        sourceType: 'module', // Modulsystem
      },
    },
    settings: { react: { version: 'detect' } }, // Automatische Erkennung der React-Version
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Empfohlene Regeln
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // Eigene Anpassungen
      'react/jsx-no-target-blank': 'off', // Keine Warnungen für "target=_blank"
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-unused-vars': [
        'error',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
      ],
      'react/react-in-jsx-scope': 'off', // Kein React-Import erforderlich (React 17+)
    },
  },
];
