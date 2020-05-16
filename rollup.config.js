import path from 'path'
import babel from 'rollup-plugin-babel'
import defaultTsConfig from './tsconfig.json'
import multiInput from 'rollup-plugin-multi-input'
import typescript from '@rollup/plugin-typescript'

const isCommonJS = process.env.CJS
export default {
  external: ['safely-iterate'],
  input: path.resolve(__dirname, 'src/**.ts'),
  plugins: [
    multiInput(),
    typescript({
      ...defaultTsConfig.compilerOptions,
      ...{
        outDir: isCommonJS ? 'dist/cjs' : 'dist/esm',
        exclude: defaultTsConfig.exclude,
      },
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  output: {
    dir: isCommonJS ? 'dist/cjs' : 'dist/esm',
    format: isCommonJS ? 'cjs' : 'esm',
    exports: !isCommonJS && 'named',
  },
}
