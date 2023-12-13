import { FormattedMoney } from '@app/i18n/FormattedMoney';
import { FormattedNumber } from '@app/i18n/FormattedNumber';
import { useI18nLocale } from '@app/i18n/I18nProvider';
import { DEFAULT_CURRENCY, Language } from '@app/i18n/constants';
import { useTranslations } from '@app/i18n/useTranslations';
import { FormattedDate, FormattedMessage, useIntl } from 'react-intl';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const LocalizationScreen = () => {
  const intl = useIntl();
  const { setLocale, locale } = useI18nLocale();

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
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
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

      <Text style={{ color: 'white', fontSize: 20 }} testID="number1">
        <FormattedNumber value={17542210.131} />
      </Text>

      <Text style={{ color: 'white', fontSize: 20 }} testID="number2">
        <FormattedNumber value={17542.131} minimumFractionDigits={2} />
      </Text>

      <Text style={{ color: 'white', fontSize: 20 }} testID="number3">
        <FormattedNumber value={29123} />
      </Text>

      <Text style={styles.text} testID="money">
        <FormattedMoney value={10000} currencyCode={DEFAULT_CURRENCY} />
      </Text>

      <Text style={[styles.text, styles.textMargin]} testID="mockTranslationTest">
        {t('mockTranslationTest')}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          right: 30,
          bottom: 50,
        }}>
        <Pressable onPress={() => setLocale(Language.EN)} testID="changeEN">
          <View style={styles.buttonRound}>
            <Text>{Language.EN}</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => setLocale(Language.ES)} testID="changeES">
          <View style={styles.buttonRound}>
            <Text>{Language.ES}</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonRound: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderColor: 'white',
    borderWidth: 2,
  },
  text: {},
  textMargin: {
    marginTop: 20,
    fontSize: 20,
  },
});
