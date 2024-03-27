import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import LottieView from "lottie-react-native";

const AnimationScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // After 2750 milliseconds, navigate to 'ProfileScreen'
    const timeout = setTimeout(() => {
      navigation.navigate("(modals)/login" as never);
    }, 2750);

    // Cleanup function to clear the timeout when component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        style={styles.animation}
        source={require("@/assets/lottie_animations/airbnb-logo-black.json")}
        autoPlay
        speed={0.5}
        loop={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  animation: {
    width: 400,
    height: 400,
    marginBottom: 98,
    marginRight: 12,
  },
});

export default AnimationScreen;
