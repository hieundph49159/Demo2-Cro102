import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="useState Example" onPress={() => router.push('/UseStateScreen')} />
      <Button title="useEffect Example" onPress={() => router.push('/UseEffectScreen')} />
      <Button title="useRef Example" onPress={() => router.push('/UseRefScreen')} />
      <Button title="useCallback Example" onPress={() => router.push('/UseCallbackScreen')} />
      <Button title="useMemo Example" onPress={() => router.push('/UseMemoScreen')} />
      <Button title="useContext Example" onPress={() => router.push('/UseContextScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});

export default HomeScreen;