import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    external: ['react', 'react/jsx-runtime'],
    plugins: [
      terser(),
      typescript({
        tsconfig: 'tsconfig.json',
        declaration: true,
        declarationDir: 'types',
        rootDir: 'src',
        sourceMap: true,
      }),
    ],
    output: [
      {
        file: 'lib/index.js',
        name: 'ReactifySvelte',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'lib/index.mjs',
        name: 'ReactifySvelte',
        format: 'es',
        sourcemap: true,
      },
    ],
  },
  {
    input: 'lib/types/index.d.ts',
    external: ['react', 'react/jsx-runtime'],
    plugins: [dts()],
    output: [{ file: 'lib/index.d.ts', format: 'es' }],
  },
];
