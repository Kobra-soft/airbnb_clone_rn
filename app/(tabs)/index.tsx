import { View, Text, StyleSheet } from "react-native";
import React, { useCallback } from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import { SafeAreaProvider } from "react-native-safe-area-context";

const IndexScreen = () => {

/*   const onDataChanged = (category: string) => {
    console.log('Changed_ ', category);
  } */

  const onDataChanged = useCallback((category: string) => {
    console.log('Changed_ ', category);
  }, []);


  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <Stack.Screen
          options={{
            header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
          }}
        />

        {/* <Listings /> */}
      </View>
    </SafeAreaProvider>
  );
};

export default IndexScreen;
