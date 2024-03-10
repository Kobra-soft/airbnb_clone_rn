import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import { SafeAreaProvider } from "react-native-safe-area-context";
/* import Colors from "@/constants/Colors"; */

const IndexScreen = () => {
  return (
    <SafeAreaProvider>
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{
        header: () => <ExploreHeader />,
      }} />
      <Listings />
    </View>
    </SafeAreaProvider>
  );
};

export default IndexScreen;