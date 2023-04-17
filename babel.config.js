module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: '> 0.5%, last 2 versions, ie >= 11',
          node: 'current',
        },
        modules: 'auto',
      },
    ],
    '@babel/preset-typescript',
  ],
}
