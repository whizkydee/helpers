import path from 'path'
import babel from 'rollup-plugin-babel'
import multiInput from 'rollup-plugin-multi-input'
import typescript from '@rollup/plugin-typescript'

const isCommonJS = process.env.CJS
export default {
  external: ['safely-iterate'],
  input: path.resolve(__dirname, 'src/**.ts'),
  plugins: [
    multiInput(),
    typescript({
      lib: ['DOM'],
      target: 'es5',
      downlevelIteration: true,
      outDir: isCommonJS ? 'dist/cjs' : 'dist/esm',
      strict: true,
      rootDir: 'src',
      pretty: true,
      declaration: true,
      esModuleInterop: true,
      exclude: ['node_modules', 'dist'],
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
