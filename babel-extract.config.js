module.exports = {
  presets: ['babel-preset-gatsby'],
  plugins: [
    [
      'i18next-extract',
      {
        locales: ['de', 'en'],
        keySeparator: null,
        nsSeparator: null,
        keyAsDefaultValue: ['de', 'en'],
        useI18nextDefaultValue: ['de', 'en'],
        discardOldKeys: true,
        outputPath: 'locales/{{locale}}/{{ns}}.json',
        customTransComponents: [['gatsby-plugin-react-i18next', 'Trans']],
      },
    ],
  ],
  overrides: [
    {
      test: [`**/*.ts`, `**/*.tsx`],
      plugins: [[`@babel/plugin-transform-typescript`, { isTSX: true }]],
    },
  ],
};
