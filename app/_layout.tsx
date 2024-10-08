import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { LogBox, TouchableOpacity } from "react-native";
import * as SecureStore from "expo-secure-store";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import CrossIcon from "@/assets/svgs/cross.svg";

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

/* export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router"; */

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
/*   const [loaded, error] = useFonts({
    "Cereal-light": require("../assets/fonts/AirbnbCereal_W_Lt.otf"),
    "Cereal": require("../assets/fonts/AirbnbCereal_W_Bk.otf"),
    "Cereal-medium": require("../assets/fonts/AirbnbCereal_W_Md.otf"),
    "Cereal-bold": require("../assets/fonts/AirbnbCereal_W_Bd.otf"),
    "Cereal-extra-bold": require("../assets/fonts/AirbnbCereal_W_Bd.otf"),
    "Cereal-black": require("../assets/fonts/AirbnbCereal_W_Blk.otf"),
  }); */

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
/*   useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  } */


  // NEW EXPO FONT 12.0.10 code to test
  const [fontsLoaded] = useFonts({
    "Cereal-light": require("../assets/fonts/AirbnbCereal_W_Lt.otf"),
    "Cereal": require("../assets/fonts/AirbnbCereal_W_Bk.otf"),
    "Cereal-medium": require("../assets/fonts/AirbnbCereal_W_Md.otf"),
    "Cereal-bold": require("../assets/fonts/AirbnbCereal_W_Bd.otf"),
    "Cereal-extra-bold": require("../assets/fonts/AirbnbCereal_W_Bd.otf"),
    "Cereal-black": require("../assets/fonts/AirbnbCereal_W_Blk.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY!}
      tokenCache={tokenCache}
    >
      <RootLayoutNav />
    </ClerkProvider>
  );
}

function RootLayoutNav() {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();

  /*   useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/(modals)/login');
    }

  }, [isLoaded]) */

  useEffect(() => {
    console.log("isLoaded:", isLoaded);
    console.log("isSignedIn:", isSignedIn);

    if (isLoaded && isSignedIn) {
      router.push("/(tabs)"); // Navigate to the desired page after sign-in
    } /* else if (isLoaded && !isSignedIn) {
      router.push("/(modals)/login"); // Navigate to the login page if the user is not signed in
    } */
  }, [isLoaded, isSignedIn, router]);

  // ignores logs for now, will remove later for production build!
  // LogBox is automatically disabled in release (production) ... React-Native Debugging Guidelines
  /* LogBox.ignoreAllLogs(true); */
  LogBox.ignoreLogs([
    "The navigation state parsed from the URL contains routes not present in the root navigator. This usually means that the linking configuration doesn't match the navigation structure. See https://reactnavigation.org/docs/configuring-links for more details on how to specify a linking configuration.",
  ]);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modals)/login"
        options={{
          headerShown: false,
          title: "Login",
          headerTitleStyle: {
            fontFamily: "Cereal-medium",
          },
          presentation: "modal",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              {/* <Ionicons name="close-outline" size={28} /> */}
              <CrossIcon width={24} height={24} color={"#000000"} />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen name="listing/[id]" options={{ headerTitle: "" }} />

      <Stack.Screen
        name="(modals)/booking"
        options={{
          presentation: "transparentModal",
          animation: "fade",
          headerTitle: "Booking",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              {/* <Ionicons name="close-outline" size={28} /> */}
              <CrossIcon width={24} height={24} color={"#000000"} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="listing/animationScreen"
        options={{
          presentation: "transparentModal",
          animation: "fade",
          headerTitle: "Splash Screen",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              {/* <Ionicons name="close-outline" size={28} /> */}
              <CrossIcon width={24} height={24} color={"#000000"} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
