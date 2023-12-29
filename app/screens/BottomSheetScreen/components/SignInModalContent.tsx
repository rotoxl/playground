import { useTranslations } from '@app/i18n/useTranslations';
import { IconButton } from '@app/ui/buttons/IconButton/IconButton';
import { useCustomSafeArea } from '@app/ui/layout/useCustomSafeArea';
import { TextLink } from '@app/ui/text/TextLink';
import MIcon from '@expo/vector-icons/MaterialCommunityIcons';
import { useCallback } from 'react';
import { Alert, Text, View } from 'react-native';
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
              onPress={handleLogin('Continue with Google')}
              testID="signInGoogle">
              <MIcon name="google" size={20} color={theme.colors.white} />

              <Text style={[styles.buttonText, { color: theme.colors.white }]}>
                {t('signin.signinWithGoogle')}
              </Text>
            </IconButton>
          </View>

          <View style={styles.itemContainer}>
            <IconButton
              borderColor={theme.colors.transparent}
              onPress={handleLogin('See other options')}
              testID="signInOthers">
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
      <SignInModalFooter />
    </View>
  );
};

export const SignInModalFooter = () => {
  const { bottom } = useCustomSafeArea();
  const { styles } = useStyles(stylesheet);
  const { t } = useTranslations();

  /* istanbul ignore next */
  const handleOpenLink = (link: string) => () => {
    Alert.alert('Open link', link, [{ text: 'OK' }]);
  };

  return (
    <View style={[styles.footer, { bottom }]} testID="footer">
      <Text style={styles.textDisclaimer}>
        {t('signin.disclaimer', {
          terms: (
            <TextLink
              testID="termsLink"
              content={t('signin.terms')}
              onPress={handleOpenLink('https://www.mysite.com/terms')}
            />
          ),
          privacyPolicy: (
            <TextLink
              testID="privacyLink"
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
    alignContent: 'center',
    paddingBottom: theme.margins.xl,
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
    color: theme.colors.typography_main,
  },
  buttonText: {
    ...theme.fonts.button,
    color: theme.colors.typography_main,
  },
  textBody: {
    ...theme.fonts.body,
    lineHeight: 20,
  },
  textDisclaimer: {
    ...theme.fonts.small,
    color: theme.colors.typography_secondary,
    textAlign: 'center',
    marginTop: theme.margins.xl,
  },
  footer: {
    paddingHorizontal: theme.margins.lg,
  },
}));
