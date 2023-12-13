/* istanbul ignore file */

import { TranslationId } from '@app/i18n/constants';
import * as Translations from '@app/i18n/useTranslations';

export const mockTranslations = () => {
  const interceptedValues: Record<string, any> = {};

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  jest
    .spyOn(Translations, 'useTranslations')
    // @ts-ignore
    .mockImplementation(() => ({
      t: (text: TranslationId, values?: Record<string, any>) => {
        if (values) {
          interceptedValues[text] = values;
          return text;
        } else {
          return text;
        }
      },
    }));

  const expectText = (actual: any, key: string, values?: any) => {
    // console.log('expectText', actual, key, values, interceptedValues?.[key]);
    expect(actual).toHaveTextContent(key);
    if (interceptedValues?.[key]) {
      expect(interceptedValues?.[key]).toStrictEqual(values);
    }
  };

  return {
    expectText,
  };
};
