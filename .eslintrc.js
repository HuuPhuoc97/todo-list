module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'implicit-arrow-linebreak': 'off',
    'arrow-parens': 'off',
    'no-undef': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': 'off',
    'no-useless-escape': 'off',
    'operator-linebreak': 'off',
    'space-before-function-paren': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'object-shorthand': 'off',
    'no-console': 'off',
    'no-use-before-define': 'off',
    'react/prop-types': [2, { ignore: ['children'] }],
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    eqeqeq: 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      paths: ['src'],
    },
    react: {
      pragma: 'React',
      version: '16.12.0',
    },
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
