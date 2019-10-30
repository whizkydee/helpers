module.exports = {
  env: {
    test: {
      presets: [
        '@babel/env',
        {
          spec: true,
          modules: false,
          forceAllTransforms: true,
          useBuiltIns: 'usage',
          corejs: { version: 3, proposals: true },
        },
      ],
      plugins: ['@babel/plugin-transform-runtime'],
    },
  },
  presets: [['@babel/env', { loose: true, modules: false }]],
  plugins: ['@babel/plugin-proposal-object-rest-spread'],
}
