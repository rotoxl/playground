import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { BottomSheetScreen } from '../BottomSheetScreen';

const mockOpenModal = jest.fn();
const mockCloseModal = jest.fn();

jest.mock('@app/modal/BottomSheetModal', () => {
  const { SNAP_POINTS_DYNAMIC, SNAP_POINTS_MEDIUM_FULL_HEIGHT } = jest.requireActual(
    '@app/modal/BottomSheetModal',
  );
  return {
    SNAP_POINTS_DYNAMIC,
    SNAP_POINTS_MEDIUM_FULL_HEIGHT,
    bottomSheetModalRef: {
      _test: 'hello',
      current: {
        open: (params: any) => mockOpenModal(params),
        close: () => mockCloseModal(),
      },
    },
  };
});

describe('BottomSheetScreen', () => {
  it('should open linkedInModal with the right parameters', () => {
    const { getByTestId } = render(<BottomSheetScreen />);

    fireEvent.press(getByTestId('test1'));
    expect(mockOpenModal).toHaveBeenCalledWith(
      expect.objectContaining({
        snapPoints: ['65%', '100%'],
        title: expect.any(String),
      }),
    );
  });

  it('should open smallModal with the right parameters', () => {
    const { getByTestId } = render(<BottomSheetScreen />);

    fireEvent.press(getByTestId('test2'));
    expect(mockOpenModal).toHaveBeenCalledWith(
      expect.objectContaining({
        snapPoints: ['CONTENT_HEIGHT'],
      }),
    );
  });
});
