import { reactNativeRole } from '@app/screens/BottomSheetScreen/mocks';
import { render } from '@testing-library/react-native';

import { LinkedInModalContent } from '../LinkedInModalContent';

describe('LinkedInModalContent', () => {
  test('renders all blocks', () => {
    const { getByTestId } = render(<LinkedInModalContent role={reactNativeRole} />);

    expect(getByTestId('companyHeader')).toBeTruthy();
    expect(getByTestId('roleType')).toBeTruthy();
    expect(getByTestId('buttons')).toBeTruthy();
    expect(getByTestId('content')).toBeTruthy();
  });
});
