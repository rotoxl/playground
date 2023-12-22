import { mockBottomSheetModal } from '@app/testing/mockBottomSheetModal';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { BottomSheetScreen } from '../BottomSheetScreen';

const { mockOpenModal } = mockBottomSheetModal();

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
