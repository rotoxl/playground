import { useTranslations } from '@app/i18n/useTranslations';
import { RoleModel } from '@app/screens/BottomSheetScreen/types';
import { IconButton } from '@app/ui/buttons/IconButton/IconButton';
import MIcon from '@expo/vector-icons/MaterialCommunityIcons';
import { useCallback } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Tag } from './Tag';
import { useSkillList } from '../useSkillList';

export const LinkedInModalContent = ({ role, testID }: { role: RoleModel; testID?: string }) => {
  const { styles, theme } = useStyles(stylesheet);
  const { t } = useTranslations();
  const { bottom } = useSafeAreaInsets();
  const { getSkillList } = useSkillList();

  const Content = useCallback(
    () => (
      <>
        <View style={styles.row} testID="companyHeader">
          <View style={styles.avatar} />
          <View>
            <Text style={styles.body}>{role.company.name}</Text>
            <Text style={styles.body}>{role.company.location}</Text>
          </View>
        </View>

        <View testID="roleType">
          <View style={[styles.row, styles.spaceTop]}>
            <MIcon name="briefcase-variant" size={20} color={theme.colors.rhino} />
            <Tag text={role.roleInfo.locationType} />
            <Tag text={role.roleInfo.jobType} />
          </View>

          <View style={styles.row}>
            <MIcon name="office-building-outline" size={20} color={theme.colors.rhino} />
            <Text style={styles.body}>{t('role.company.size', { size: role.company.size })}</Text>
          </View>

          <View style={styles.row}>
            <MIcon name="account-circle" size={20} color={theme.colors.rhino} />
            <Text style={styles.body}>{role.roleInfo.recruiter.name}</Text>
          </View>

          <View style={styles.row}>
            <MIcon name="list-status" size={20} color={theme.colors.rhino} />
            <Text style={styles.body}>
              {t('role.skills.list', { list: getSkillList(role.roleInfo.skills) })}
            </Text>
          </View>
        </View>

        <View style={[styles.row, styles.spaceTop]} testID="buttons">
          <IconButton backgroundColor={theme.colors.synbad}>
            <MIcon name="linkedin" size={20} color={theme.colors.white} />

            <Text style={[styles.button, { color: theme.colors.white }]}>
              {t('button.easyApply')}
            </Text>
          </IconButton>

          <IconButton borderColor={theme.colors.synbad} backgroundColor={theme.colors.white}>
            <Text style={styles.button}>{t('button.save')}</Text>
          </IconButton>
        </View>

        <View style={[styles.spaceTop]} testID="content">
          {role.roleInfo.content.map((item, index) => {
            return (
              <View key={`chunk-${index}`}>
                <Text style={styles.contentTitle}>{item.title}</Text>
                <Text style={styles.contentText}>{item.text}</Text>
              </View>
            );
          })}
        </View>
      </>
    ),
    [],
  );

  return (
    <View style={styles.rootContainer} testID={testID}>
      <ScrollView
        contentContainerStyle={[styles.scrollView, { bottom }]}
        showsVerticalScrollIndicator={false}>
        <Content />
      </ScrollView>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  rootContainer: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: theme.margins.lg,
    top: theme.margins.sm,
  },
  row: {
    flexDirection: 'row',
    gap: theme.margins.lg,
    marginTop: theme.margins.md,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: theme.colors.osloGray,
  },

  body: {
    ...theme.fonts.body,
    color: theme.colors.typography_main,
  },
  button: {
    ...theme.fonts.button,
    color: theme.colors.synbad,
  },
  spaceTop: {
    marginTop: theme.margins.xl,
  },

  contentTitle: {
    ...theme.fonts.body,
    lineHeight: 26,
    fontWeight: 'bold',
  },

  contentText: {
    ...theme.fonts.body,
    lineHeight: 20,
  },
}));
