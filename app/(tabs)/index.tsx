import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";

/*  This is the index screen for the app. 
 It is the first screen that the user sees when they open the app. */
const IndexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.linkContainer, /* {borderTopWidth:1.2} */]}>
        <Link href={"/(modals)/login"} style={styles.link}>Login</Link>
      </View>
      <View style={styles.linkContainer}>
        <Link href={"/(modals)/booking"} style={styles.link}>Bookings</Link>
      </View>
      <View style={styles.linkContainer}>
        <Link href={"/listing/1337"} style={styles.link}>Listing [id]</Link>
      </View>
      <View style={styles.linkContainer}>
        <Link href={"/listing/animationScreen"} style={styles.link}>Splash Screen</Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    /* backgroundColor: '#FF5A5F', */
    backgroundColor: '#FFFFFF',
    /* padding: 16, */
    paddingTop: 0,
  },
  linkContainer: {
    width: "100%",
    borderBottomWidth: 1.2,
    borderBottomColor: Colors.grey,
    borderStyle: 'solid',
    paddingHorizontal: 18,
    opacity: 5.8,
    backgroundColor: '#FFFFFF',
    
  },
  link: {
    color: Colors.dark,
    fontSize: 16,
    fontFamily: 'Cereal-medium',
    paddingVertical: 10,
  },
});

export default IndexScreen;