import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { defaultStyles} from '@/constants/Styles';

const Page = () => {
  useWarmUpBrowser();

  return (
    <View style={styles.container} >
      <Text style={defaultStyles.textHeadings}>Log in or sign up to Airbnb</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    /* padding: 26, */
    paddingLeft: 23,
    
  }
})
export default Page;
