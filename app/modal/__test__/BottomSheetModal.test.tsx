import { BottomSheetWrapper } from '@app/testing/renderWrapped';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { Pressable, View } from 'react-native';

import { bottomSheetModalRef } from '../BottomSheetModal';

const renderContent = () => (
  <View style={{ backgroundColor: 'red', width: 100, height: 100 }} testID="modal-content" />
);

describe('BottomSheetModal', () => {
  it('renders BottomSheetModal content correctly', async () => {
    const handleOpen = () => {
      bottomSheetModalRef.current?.open({
        content: renderContent(),
      });
    };

    const { getByTestId } = render(<Pressable onPress={handleOpen} testID="test-pressable" />, {
      wrapper: BottomSheetWrapper,
    });

    fireEvent.press(getByTestId('test-pressable'));

    await waitFor(() => {
      expect(getByTestId('modal-content')).toBeTruthy();
    });
  });

  //doesnt look like this is possible, the mock provided by the library just renders the content,
  //  (eg title_test would require the mock to render the handle)
  //
  // it.skip('renders BottomSheetModal with title', async () => {});
  // it.skip('renders BottomSheetModal with snapPoints', async () => {});
});
