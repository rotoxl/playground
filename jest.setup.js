import { MockComponent } from '@app/testing/MockComponent';
import { mockTranslations } from '@app/testing/mockTranslations';
import { mockUnistyles } from '@app/testing/mockUnistyles';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

mockTranslations();
mockUnistyles();

jest.mock('@expo/vector-icons/MaterialCommunityIcons', () => ({
  __esModule: true,
  default: MockComponent,
}));

jest.mock('@gorhom/bottom-sheet', () => ({
  __esModule: true,
  ...require('@gorhom/bottom-sheet/mock'),
}));
