import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'expo-playground',
  slug: 'expo-playground',
  version: '1.0.0',
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
    bundleIdentifier: 'com.example.app',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'com.example.app',
  },
  web: {
    favicon: './assets/favicon.png',
  },
  plugins: ['expo-localization'],
});
