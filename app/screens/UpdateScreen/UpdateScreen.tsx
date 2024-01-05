/* istanbul ignore file */

import { useUpdate } from '@app/expo-updates/useUpdate';
import { FAB } from '@app/ui/buttons/FAB/FAB';
import * as Updates from 'expo-updates';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const UpdateScreen = () => {
  const { styles } = useStyles(stylesheet);

  const [latestUpdate, setLatestUpdate] = useState<Updates.UpdateCheckResult | null>(null);
  const { checkUpdate, isCheckingUpdate, forceUpdate } = useUpdate();

  const handleGetUpdates = async () => {
    const update = await checkUpdate();
    if (update) setLatestUpdate(update);
  };

  const UpdateInfo = () => {
    return (
      <View>
        <Text style={styles.title}>Update {latestUpdate?.manifest?.id}</Text>
        <Text style={styles.subtitle}>{latestUpdate?.reason}</Text>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>{latestUpdate ? <UpdateInfo /> : <></>}</View>

      {latestUpdate ? (
        <FAB icon="cloud-download" onPress={forceUpdate} testID="FAB" />
      ) : (
        <FAB
          icon="cloud-refresh"
          onPress={handleGetUpdates}
          testID="FAB"
          isLoading={isCheckingUpdate}
        />
      )}
    </>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    padding: theme.margins.lg,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: theme.colors.typography_main,
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.typography_secondary,
  },
}));
