import { View, Text, StyleSheet } from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import listingsData from "@/assets/data/airbnb-listings.json";
import { SafeAreaProvider } from "react-native-safe-area-context";

const IndexScreen = () => {

/*   const onDataChanged = (category: string) => {
    console.log('Changed_ ', category);
  } */

  const [ category, setCategory ] = useState('Earth homes');
  const items = useMemo(() => listingsData as any, []);

  const onDataChanged = (category: string) => {
    /* console.log('CHANGED_ ', category); */
    setCategory(category);
  };


  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <Stack.Screen
          options={{
            header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
          }}
        />

        <Listings listings={items} category={category}/>
      </View>
    </SafeAreaProvider>
  );
};

export default IndexScreen;
