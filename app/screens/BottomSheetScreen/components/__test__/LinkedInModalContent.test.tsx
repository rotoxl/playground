import { mockReactNativeRole } from '@app/screens/BottomSheetScreen/mocks';
import { renderWrapped } from '@app/testing/renderWrapped';

import { LinkedInModalContent } from '../LinkedInModalContent';

describe('LinkedInModalContent', () => {
  test('renders all blocks', () => {
    const { getByTestId } = renderWrapped(<LinkedInModalContent role={mockReactNativeRole} />);

    expect(getByTestId('companyHeader')).toBeTruthy();
    expect(getByTestId('roleType')).toBeTruthy();
    expect(getByTestId('buttons')).toBeTruthy();
    expect(getByTestId('content')).toBeTruthy();
  });
});
