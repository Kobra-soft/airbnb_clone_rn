import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Stack, router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

const EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

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
        <Stack.Screen 
        name="(modals)/login" 
        options={{ 
          title: 'Log in or sign up',
          headerTitleStyle:{
            fontFamily: 'Cereal-medium'
          },
          presentation: 'modal',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={28} />
            </TouchableOpacity>
          )
          }} 
          />
          <Stack.Screen name="listing/[id]" options={{ headerTitle: '' }} />
          
          <Stack.Screen 
        name="(modals)/booking" 
        options={{
          presentation: 'transparentModal',
          animation: 'fade',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={28} />
            </TouchableOpacity>
          )
          }} 
          />

      </Stack>
  );
}
