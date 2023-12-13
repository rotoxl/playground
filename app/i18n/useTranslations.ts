/* istanbul ignore file */

import { TranslationId } from '@app/i18n/constants';
import { useCallback } from 'react';
import { useIntl } from 'react-intl';

const FF_LONG_TEST_MODE = true;

export const useTranslations = () => {
  const intl = useIntl();

  const t = useCallback(
    (id: TranslationId, values?: Parameters<typeof intl.formatMessage>[1]) => {
      const value = intl.formatMessage({ id }, values);

      return FF_LONG_TEST_MODE ? `${value} ${value} ${value}` : value;
    },
    [intl.locale],
  );

  return { t };
};
