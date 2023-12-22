import { FormattedMoney } from '@app/i18n/FormattedMoney';
import { FormattedNumber } from '@app/i18n/FormattedNumber';
import { useI18nLocale } from '@app/i18n/I18nProvider';
import { DEFAULT_CURRENCY, Language } from '@app/i18n/constants';
import { useTranslations } from '@app/i18n/useTranslations';
import { RoundButton } from '@app/ui/buttons/RoundButton/RoundButton';
import { FormattedDate, FormattedMessage, useIntl } from 'react-intl';
import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const LocalizationScreen = () => {
  const intl = useIntl();
  const { setLocale, locale } = useI18nLocale();
  const { styles } = useStyles(stylesheet);

  const { t } = useTranslations();

  const msg = intl.formatMessage(
    {
      id: 'hello',
      defaultMessage: 'Hello {friend}!',
    },
    {
      friend: 'Ernesto',
    },
  );

  return (
    <View style={styles.rootView}>
      <Text style={styles.text}>
        Current lang: <Text testID="currentLang">{locale}</Text>
      </Text>

      <Text style={styles.textMargin}>
        (✅ recommended ) Using our custom hook useTranslations (with type validation and
        longTestMode for debugging)
      </Text>
      <Text style={styles.text} testID="stringViaHook">
        {t('hello', { friend: 'Ernesto' })}
      </Text>

      <Text style={styles.textMargin}>(❌ not recommended) Using FormattedMessage</Text>

      <Text style={styles.text}>
        <FormattedMessage
          id="hello"
          defaultMessage="Hello {friend}!"
          values={{ friend: 'Ernesto' }}
        />
      </Text>

      <Text style={styles.textMargin}>(❌ not recommended) Using intl.formatMessage</Text>
      <Text style={styles.text}>{msg}</Text>

      <Text style={styles.textMargin}>Date and numbers</Text>
      <Text style={styles.text} testID="date">
        <FormattedDate value={new Date(2023, 11, 24)} year="numeric" month="short" day="numeric" />
      </Text>

      <Text style={[styles.text, styles.textMargin]} testID="number1">
        <FormattedNumber value={17542210.131} />
      </Text>

      <Text style={styles.text} testID="number2">
        <FormattedNumber value={17542.131} minimumFractionDigits={2} />
      </Text>

      <Text style={styles.text} testID="number3">
        <FormattedNumber value={29123} />
      </Text>

      <Text style={styles.text} testID="money">
        <FormattedMoney value={10000} currencyCode={DEFAULT_CURRENCY} />
      </Text>

      <Text style={[styles.text, styles.textMargin]} testID="mockTranslationTest">
        {t('mockTranslationTest')}
      </Text>

      <View style={styles.toolbar}>
        <Text testID="currentTheme" style={styles.themeName}>
          current lang: {locale}
        </Text>

        <RoundButton
          onPress={() => setLocale(Language.EN)}
          isPressed={locale === Language.EN}
          testID="changeEN"
          backgroundColor="white">
          <Text>{Language.EN.toUpperCase()}</Text>
        </RoundButton>
        <View style={styles.buttonSeparator} />
        <RoundButton
          onPress={() => setLocale(Language.ES)}
          isPressed={locale === Language.ES}
          testID="changeES"
          backgroundColor="white">
          <Text>{Language.ES.toUpperCase()}</Text>
        </RoundButton>
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => {
  return {
    rootView: {
      flex: 1,
      backgroundColor: theme.colors.window,
      padding: theme.margins.lg,
      justifyContent: 'flex-start',
    },

    buttonSeparator: {
      marginRight: theme.margins.sm,
    },
    text: {
      color: theme.colors.typography_main,
    },
    textMargin: {
      marginTop: 20,
      fontSize: 20,
      color: theme.colors.typography_main,
    },
    toolbar: {
      flexDirection: 'row',
      position: 'absolute',
      right: 30,
      bottom: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    themeName: {
      color: theme.colors.typography_main,
      fontSize: 20,
      marginRight: 10,
    },
  };
});
