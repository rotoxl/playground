import { mockTranslations } from '@app/testing/mockTranslations';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

mockTranslations();
