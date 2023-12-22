import { colors, lightTheme } from '@app/themes/themes';
import { render } from '@testing-library/react-native';
import React from 'react';

import { Tag } from '../Tag';

describe('Tag', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<Tag text="Test content" testID="tag" />);
    const container = getByTestId('tag');

    expect(container).toHaveStyle({
      backgroundColor: colors.synbad,
      borderRadius: lightTheme.borderRadius.sm,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: lightTheme.margins.sm,
    });

    const innerText = getByTestId('tag-text');
    expect(innerText).toHaveTextContent('Test content');
    expect(innerText).toHaveStyle({ color: colors.white });
  });
});
