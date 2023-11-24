import '@testing-library/jest-native/extend-expect';

import { useI18nLocale } from '@app/i18n/I18nProvider';
import { Language } from '@app/i18n/constants';
import { mockTranslations } from '@app/testing/mockTranslations';
import { renderWrapped } from '@app/testing/renderWrapped';
import { fireEvent, renderHook, waitFor } from '@testing-library/react-native';

import { LocalizationScreen } from '../LocalizationScreen'; // adjust this import according to your file structure

const { expectText } = mockTranslations();

describe('LocalizationScreen', () => {
  it('should have correct translationId', () => {
    const { getByTestId } = renderWrapped(<LocalizationScreen />);
    expect(getByTestId('mockTranslationTest')).toHaveTextContent('mockTranslationTest');
  });

  it('should have correct translationId with variable', () => {
    const { getByTestId } = renderWrapped(<LocalizationScreen />);
    expectText(getByTestId('stringViaHook'), 'hello', { friend: 'Ernesto' });
  });

  it('should have correct date format', () => {
    const { getByTestId } = renderWrapped(<LocalizationScreen />);
    const formattedMoney = getByTestId('date');
    expect(formattedMoney).toHaveTextContent('Dec 24, 2023');
  });

  it('should have correct number format', () => {
    const { getByTestId } = renderWrapped(<LocalizationScreen />);
    const formattedMoney = getByTestId('number');
    expect(formattedMoney).toHaveTextContent('17,542,210.13');
  });

  it('should have correct money format', () => {
    const { getByTestId } = renderWrapped(<LocalizationScreen />);
    const formattedMoney = getByTestId('money');
    expect(formattedMoney).toHaveTextContent('10,000.00');
  });

  it('should change locale', async () => {
    const { getByTestId } = renderWrapped(<LocalizationScreen />);
    const localeLabel = getByTestId('currentLang');
    expect(localeLabel).toHaveTextContent(Language.EN);

    fireEvent.press(getByTestId('changeES'));

    await waitFor(() => {
      expect(localeLabel).toHaveTextContent(Language.ES);
    });
  });
});
