const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  return {
    ...defaultConfig,
    transformer: {
      ...defaultConfig.transformer,
      // Suppress matched instance warnings
      suppressMatchedInstanceWarnings: true,
    },
  };
})();