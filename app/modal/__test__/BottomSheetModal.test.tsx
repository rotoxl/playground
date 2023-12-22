import { BottomSheetWrapper } from '@app/testing/renderWrapped';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { Pressable, View } from 'react-native';

import { SNAP_POINTS_DYNAMIC, bottomSheetModalRef } from '../BottomSheetModal';

const renderContent = () => (
  <View style={{ backgroundColor: 'red', width: 100, height: 100 }} testID="modal-content" />
);

describe('BottomSheetModal', () => {
  it('renders BottomSheetModal correctly', async () => {
    const handleOpen = () => {
      bottomSheetModalRef.current?.open({
        content: renderContent(),
      });
    };

    const { getByTestId } = render(<Pressable onPress={handleOpen} testID="test-open" />, {
      wrapper: BottomSheetWrapper,
    });

    fireEvent.press(getByTestId('test-open'));

    await waitFor(() => {
      expect(getByTestId('modal-content')).toBeTruthy();
    });
  });

  it('opens and closes BottomSheetModal', async () => {
    const handleOpen = () => {
      bottomSheetModalRef.current?.open({
        content: renderContent(),
        snapPoints: SNAP_POINTS_DYNAMIC,
      });
    };
    const handleClose = () => {
      bottomSheetModalRef.current?.close();
    };

    const { getByTestId } = render(
      <>
        <Pressable onPress={handleOpen} testID="test-open" />
        <Pressable onPress={handleClose} testID="test-close" />
      </>,
      {
        wrapper: BottomSheetWrapper,
      },
    );

    fireEvent.press(getByTestId('test-open'));
    fireEvent.press(getByTestId('test-close'));
  });

  it('opens fullScreen BottomSheetModal', async () => {
    const handleOpen = () => {
      bottomSheetModalRef.current?.open({
        content: renderContent(),
        snapPoints: ['100%'],
      });
    };

    const { getByTestId } = render(
      <>
        <Pressable onPress={handleOpen} testID="test-open" />
      </>,
      {
        wrapper: BottomSheetWrapper,
      },
    );

    fireEvent.press(getByTestId('test-open'));
    fireEvent.press(getByTestId('buttonClose'));
  });

  //doesnt look like this is possible, the mock provided by the library just renders the content,
  //  (eg title_test would require the mock to render the handle)
  //
  // it.skip('renders BottomSheetModal with title', async () => {});
  // it.skip('renders BottomSheetModal with snapPoints', async () => {});
});
