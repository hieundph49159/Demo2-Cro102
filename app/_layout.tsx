import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Trang Chủ" }} />
        <Stack.Screen name="UseStateScreen" options={{ title: "useState Example" }} />
        <Stack.Screen name="UseEffectScreen" options={{ title: "useEffect Example" }} />
        <Stack.Screen name="UseRefScreen" options={{ title: "useRef Example" }} />
        <Stack.Screen name="UseCallbackScreen" options={{ title: "useCallback Example" }} />
        <Stack.Screen name="UseMemoScreen" options={{ title: "useMemo Example" }} />
        <Stack.Screen name="UseContextScreen" options={{ title: "useContext Example" }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
