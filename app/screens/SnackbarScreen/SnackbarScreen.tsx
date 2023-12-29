import { useSnackbar } from '@app/snackbar/useSnackbar';
import { FAB } from '@app/ui/buttons/FAB/FAB';
import { useIntl } from 'react-intl';

export const SnackbarScreen = () => {
  const { showSnackbarOkButton } = useSnackbar();

  const intl = useIntl();

  const handleShowSnackbar = () => {
    const msg = intl.formatMessage(
      { id: 'signin.disclaimer' },
      {
        terms: intl.formatMessage({ id: 'signin.terms' }),
        privacyPolicy: intl.formatMessage({ id: 'signin.privacyPolicy' }),
      },
    );

    showSnackbarOkButton(msg);
  };

  return <FAB icon="message-flash" onPress={handleShowSnackbar} />;
};
