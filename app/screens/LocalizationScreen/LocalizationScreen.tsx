import { FormattedMoney } from '@app/i18n/FormattedMoney';
import { useI18nLocale } from '@app/i18n/I18nProvider';
import { DEFAULT_CURRENCY, Language } from '@app/i18n/constants';
import { useTranslations } from '@app/i18n/useTranslations';
import { FormattedDate, FormattedMessage, FormattedNumber, useIntl } from 'react-intl';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const LocalizationScreen = () => {
  const intl = useIntl();
  const { setLocale } = useI18nLocale();
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
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ color: 'white' }}>Using FormattedMessage</Text>

      <Text style={{ color: 'white', fontSize: 20 }}>
        <FormattedMessage
          id="hello"
          defaultMessage="Hello {friend}!"
          values={{ friend: 'Ernesto' }}
        />
      </Text>

      <Text style={{ color: 'white', marginTop: 20 }}>Using intl.formatMessage</Text>
      <Text style={{ color: 'white', fontSize: 20 }}>{msg}</Text>

      <Text style={{ color: 'white', marginTop: 20 }}>
        Using our custom hook useTranslations (with type validation and longTestMode for debugging)
      </Text>
      <Text style={{ color: 'white', fontSize: 20 }}>{t('hello', { friend: 'Ernesto' })}</Text>

      <Text style={{ color: 'white', marginTop: 20 }}>Date and numbers</Text>
      <Text style={{ color: 'white', fontSize: 20 }}>
        <FormattedDate value={new Date()} year="numeric" month="short" day="numeric" />
      </Text>

      <Text style={{ color: 'white', fontSize: 20 }}>
        <FormattedNumber value={17542210.13} />
      </Text>

      <Text style={{ color: 'white', fontSize: 20 }}>
        <FormattedMoney value={10000} currencyCode={DEFAULT_CURRENCY} />
      </Text>

      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          right: 30,
          bottom: 50,
        }}>
        <Pressable onPress={() => setLocale(Language.EN)}>
          <View style={styles.buttonRound}>
            <Text>{Language.EN}</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => setLocale(Language.ES)}>
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
});
