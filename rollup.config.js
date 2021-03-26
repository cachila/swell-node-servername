import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import { main, module } from './package.json';

export default [
  {
    input: 'index.js',
    output: [
      { file: main, format: 'cjs' },
      { file: module, format: 'es' },
    ],
    plugins: [commonjs(), terser()],
  },
];
