import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { defaultStyles} from '@/constants/Styles';

const Page = () => {
  useWarmUpBrowser();

  return (
    <View style={styles.container} >
      <Text style={defaultStyles.textHeadings}>Log in or sign up to Airbnb</Text>
        <TextInput 
          autoCapitalize="none"
          placeholder="Email"
          placeholderTextColor="#5E5D5E" // Change this color to whatever you desire
          style={[defaultStyles.inputField, {marginBottom:16, fontFamily: "Cereal", fontSize: 16.333}]}/>
          <TouchableOpacity style={defaultStyles.btn}>
            <Text style={defaultStyles.btnText}>Continue</Text>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    paddingHorizontal: 26,
    /* paddingLeft: 23, */
    
  }
})
export default Page;
