module.exports = {
  project: {
    android: {
      unstable_reactLegacyComponentNames: ['RCTVideo', 'LottieAnimationView'],
    },
    ios: {
      unstable_reactLegacyComponentNames: [],
    },
  },

  dependencies: {
    'react-native-video': {
      platforms: {
        android: {
          sourceDir: '../node_modules/react-native-video/android-exoplayer',
        },
      },
    },
  },
};
