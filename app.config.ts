import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'expo-playground',
  slug: 'expo-playground',
  version: '1.0.0',
  runtimeVersion: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  jsEngine: 'hermes',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  locales: {
    en: './locales/en.json',
    es: './locales/es.json',
  },
  scheme: 'myapp',
  ios: {
    supportsTablet: true,
    infoPlist: {
      CFBundleAllowMixedLocalizations: true,
      UIBackgroundModes: ['location', 'fetch', 'remote-notification'],
    },
    bundleIdentifier: 'in.breathefree.prod',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'in.breathefree.prod',
  },
  web: {
    favicon: './assets/favicon.png',
  },
  updates: {
    enabled: true,
    checkAutomatically: 'ON_LOAD',
    url: 'https://u.expo.dev/908c423e-4b9f-4f45-ac12-215eb5863676',
  },
  plugins: [
    'expo-localization',
    [
      'expo-updates',
      {
        username: 'rotoxl',
      },
    ],
  ],
  extra: {
    eas: {
      projectId: '908c423e-4b9f-4f45-ac12-215eb5863676',
    },
  },
});
