import path from 'path'
import babel from 'rollup-plugin-babel'
import multiInput from 'rollup-plugin-multi-input'
import typescript from '@rollup/plugin-typescript'

export default {
  external: ['core-js', 'core-js/stable', 'core-js/modules/es.array.from'],
  input: path.resolve(__dirname, 'src/**.ts'),
  plugins: [
    multiInput(),
    typescript(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  output: [
    {
      dir: 'es',
      format: 'es',
    },
    {
      dir: 'cjs',
      format: 'cjs',
      exports: 'named',
    },
  ],
}
