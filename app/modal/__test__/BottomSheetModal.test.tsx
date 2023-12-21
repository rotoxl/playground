import { BottomSheetWrapper } from '@app/testing/renderWrapped';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { Pressable, View } from 'react-native';

import { bottomSheetModalRef } from '../BottomSheetModal'; // adjust this import according to your file structure

jest.mock('@expo/vector-icons/MaterialCommunityIcons', () => 'Icon');

describe('BottomSheetModal', () => {
  test('renders correctly', async () => {
    const handleOpen = () => {
      bottomSheetModalRef.current?.open({
        content: (
          <View
            style={{ backgroundColor: 'red', width: 100, height: 100 }}
            testID="modal-content"
          />
        ),
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
});
