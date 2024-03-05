import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import LottieView from 'lottie-react-native';
import { StatusBar } from "expo-status-bar";

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  /* console.log(id) */

  return (
    <View style={styles.container}>
      {/* <Text>[id] Lottie Animation</Text> */}
      <View style={styles.welcome}>
      <LottieView style={styles.welcome} 
      source={require('@/assets/lottie_animations/rn.json')} autoPlay loop />
      </View> 
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0
  },
  welcome: {
    height: 400,
    aspectRatio:1
  }
});


export default Page;
