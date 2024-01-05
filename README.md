This is a playground app with:

- ✅ Expo / React Native (upgraded to beta-50)
- ✅ TypeScript
- ✅ `react-navigation`
- ✅ `i18n`
- ✅ Unit test with `Jest`
- ✅ E2E test with `Maestro`
  - locally
    - run `yarn maestro:install` to setup maestro locally
    - run `yarn maestro:test:all` or `yarn maestro:test:smokeTest`
  - cloud
    - run `yarn maestro:cloud:all`, see https://github.com/rotoxl/playground/pull/17 for more details
- ✅ `Unistyles` (requires prebuild `npx expo prebuild --clean`)
- ✅ OTA updates via `EAS Update`, see https://github.com/rotoxl/playground/pull/19 for more details
