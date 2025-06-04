import globals from 'globals';
import eslintJs from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginReact from 'eslint-plugin-react';

export default [
  eslintJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      react: eslintPluginReact,
      prettier: eslintPluginPrettier
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'es5',
          printWidth: 100,
          tabWidth: 2,
          semi: true,
          bracketSpacing: true
        }
      ],
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_|React|Navbar|Footer|App|StrictMode|Image|Button|InputGroup|Col|Row|Form|Card|Container|isMobile|FaTimes|FaBars|FaUser|FaStar|FaSearch|NavLink|FaYoutube|FaLinkedin|FaInstagram|FaTwitter|FaFacebook|Marca|CompraServicios|Servicios|Modelos|Home|Route|Routes|Router', // Ignora estas variables
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      'no-empty-function': 'warn'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];
