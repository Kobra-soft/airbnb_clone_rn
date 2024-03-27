const { getDefaultConfig } = require("expo/metro-config");
const { getDefaultConfig: getMetroDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  const {
    resolver: { sourceExts, assetExts },
  } = await getMetroDefaultConfig();

  return {
    ...defaultConfig,
    transformer: {
      ...defaultConfig.transformer,
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
      // Suppress matched instance warnings
      suppressMatchedInstanceWarnings: true,
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg", ...defaultConfig.resolver.sourceExts],
    },
  };
})();
