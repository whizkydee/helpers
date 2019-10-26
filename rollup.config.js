import path from 'path'
import babel from 'rollup-plugin-babel'
import multiInput from 'rollup-plugin-multi-input'

export default {
  external: ['core-js'],
  input: path.resolve(__dirname, 'src/**.js'),
  plugins: [
    multiInput(),
    babel({
      exclude: 'node_modules/**'
    }),
  ],
  output: [
    {
      format: 'es',
      dir: 'dist/es',
    },
    {
      format: 'cjs',
      dir: 'dist/cjs',
    }
  ]
}
