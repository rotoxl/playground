import { TranslationId } from '@app/i18n/constants';
import { mockUseSnackbar } from '@app/testing/mockSnackbar';
import { render, fireEvent } from '@testing-library/react-native';

import { SnackbarScreen } from '../SnackbarScreen';

const mockFormatMessage = jest.fn().mockImplementation(({ id }) => id);

jest.mock('react-intl', () => ({
  useIntl: () => ({
    formatMessage: (id: TranslationId, values: any) => mockFormatMessage(id, values),
  }),
}));

const { mockShowSnackbar } = mockUseSnackbar();

describe('SnackbarScreen', () => {
  it('should show a snackbar when the FAB is pressed', () => {
    const { getByTestId } = render(<SnackbarScreen />);
    fireEvent.press(getByTestId('FAB'));

    expect(mockShowSnackbar).toHaveBeenCalledWith('signin.disclaimer');

    expect(mockFormatMessage).toHaveBeenCalledWith({ id: 'signin.privacyPolicy' }, undefined);
    expect(mockFormatMessage).toHaveBeenCalledWith({ id: 'signin.terms' }, undefined);
    expect(mockFormatMessage).toHaveBeenCalledWith(
      { id: 'signin.disclaimer' },
      { privacyPolicy: 'signin.privacyPolicy', terms: 'signin.terms' },
    );
  });
});
