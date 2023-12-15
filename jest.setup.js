import { mockTranslations } from '@app/testing/mockTranslations';
import { mockUnistyles } from '@app/testing/mockUnistyles';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

mockTranslations();
mockUnistyles();
