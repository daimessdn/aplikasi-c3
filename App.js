import { Image, StyleSheet, Text, View } from 'react-native';
import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

import Button from './src/components/Button';

import { TEXT_FORMAT_STYLE, TEXT_STYLES } from './src/styles/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{ ...TEXT_FORMAT_STYLE.HEADING_1, marginBottom: 12 }}>Selamat datang di Aplikasi C3</Text>
      <Button type="primary" text="Login" onPress={() => console.log("login disini")} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
