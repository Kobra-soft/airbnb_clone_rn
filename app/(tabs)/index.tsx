import { View, Text, StyleSheet } from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import { SafeAreaProvider } from "react-native-safe-area-context";
/* import listingsData from "@/assets/data/airbnb-listings.json"; */
import listingsData from "@/assets/data/airbnb-listings2.json";

const IndexScreen = () => {

  const [ category, setCategory ] = useState('Earth homes');
  const items = useMemo(() => listingsData as any, []);

  const onDataChanged = (category: string) => {
    setCategory(category);
  };


  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, paddingVertical:0}}>
        <Stack.Screen
          options={{
            header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
          }}
        />

        <Listings listings={items} category={category} />
      </View>
    </SafeAreaProvider>
  );
};

export default IndexScreen;
