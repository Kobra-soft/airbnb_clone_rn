import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

/* import { useColorScheme } from '@/components/useColorScheme'; */
import { useColorScheme } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Cereal-light': require('../assets/fonts/AirbnbCereal_W_Lt.otf'),
    'Cereal': require('../assets/fonts/AirbnbCereal_W_Bk.otf'),
    'Cereal-medium': require('../assets/fonts/AirbnbCereal_W_Md.otf'),
    'Cereal-bold': require('../assets/fonts/AirbnbCereal_W_Bd.otf'),
    'Cereal-extra-bold': require('../assets/fonts/AirbnbCereal_W_Bd.otf'),
    'Cereal-black': require('../assets/fonts/AirbnbCereal_W_Blk.otf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {

  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
  );
}
