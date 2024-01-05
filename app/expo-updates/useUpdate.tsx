/* istanbul ignore file */

import * as Updates from 'expo-updates';
import { useState } from 'react';

export const useUpdate = () => {
  const [isCheckingUpdate, setIsCheckingUpdate] = useState(false);

  const checkUpdate = async () => {
    try {
      setIsCheckingUpdate(true);
      const update = await Updates.checkForUpdateAsync();
      return update.isAvailable ? update : null;
    } catch (error) {
      alert(`Error fetching latest Expo update: ${error}`);
    } finally {
      setIsCheckingUpdate(false);
    }
  };

  const forceUpdate = async () => {
    await Updates.fetchUpdateAsync();
    await Updates.reloadAsync();
  };

  return { checkUpdate, isCheckingUpdate, forceUpdate, updateId: Updates.updateId };
};
