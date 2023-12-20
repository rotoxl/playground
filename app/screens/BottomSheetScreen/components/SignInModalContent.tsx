import { useTranslations } from '@app/i18n/useTranslations';
import { IconButton } from '@app/ui/buttons/IconButton/IconButton';
import { TextLink } from '@app/ui/text/TextLink';
import MIcon from '@expo/vector-icons/MaterialCommunityIcons';
import { useCallback } from 'react';
import { Alert, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const SignInModalContent = () => {
  const { styles, theme } = useStyles(stylesheet);
  const { t } = useTranslations();

  const handleLogin = (desc: string) => () => {
    Alert.alert('Button click', desc, [{ text: 'OK' }]);
  };

  const Content = useCallback(
    () => (
      <>
        <Text style={styles.textTitle}> {t('signin.title')}</Text>

        <View style={styles.bodyContainer}>
          <View style={styles.itemContainer}>
            <IconButton
              backgroundColor={theme.colors.black}
              onPress={handleLogin('Continue with Google')}>
              <MIcon name="google" size={20} color={theme.colors.white} />

              <Text style={[styles.buttonText, { color: theme.colors.white }]}>
                {t('signin.signinWithGoogle')}
              </Text>
            </IconButton>
          </View>

          <View style={styles.itemContainer}>
            <IconButton
              borderColor={theme.colors.transparent}
              onPress={handleLogin('See other options')}>
              <Text style={styles.buttonText}>{t('signin.signinOtherOptions')}</Text>
            </IconButton>
          </View>
        </View>
      </>
    ),
    [],
  );

  return (
    <View style={styles.rootContainer}>
      <Content />
    </View>
  );
};

export const SignInModalFooter = () => {
  const { styles } = useStyles(stylesheet);
  const { t } = useTranslations();
  const { bottom } = useSafeAreaInsets();

  const handleOpenLink = (link: string) => () => {
    Alert.alert('Open link', link, [{ text: 'OK' }]);
  };

  return (
    <View style={[styles.footer, { bottom }]}>
      <Text style={styles.textDisclaimer}>
        {t('signin.disclaimer', {
          terms: (
            <TextLink
              content={t('signin.terms')}
              onPress={handleOpenLink('https://www.mysite.com/terms')}
            />
          ),
          privacyPolicy: (
            <TextLink
              content={t('signin.privacyPolicy')}
              onPress={handleOpenLink('https://www.mysite.com/privacy')}
            />
          ),
        })}
      </Text>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  rootContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: theme.margins.lg,
  },
  bodyContainer: {
    height: '100%',
    alignContent: 'center',
    marginTop: theme.margins.lg,
  },
  itemContainer: {
    marginVertical: theme.margins.sm,
  },

  textTitle: {
    ...theme.fonts.headline1,
    lineHeight: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: theme.margins.xl,
  },
  buttonText: {
    ...theme.fonts.button,
  },
  textBody: {
    ...theme.fonts.body,
    lineHeight: 20,
  },
  textDisclaimer: {
    ...theme.fonts.small,
    color: theme.colors.typography_terciary,
    textAlign: 'center',
    marginTop: theme.margins.xl,
  },
  footer: {
    backgroundColor: theme.colors.window,
    paddingHorizontal: theme.margins.lg,
    marginBottom: theme.margins.md,
  },
}));
