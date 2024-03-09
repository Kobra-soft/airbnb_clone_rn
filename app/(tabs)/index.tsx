import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";

/*  This is the index screen for the app. 
 It is the first screen that the user sees when they open the app. */
const IndexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.linkContainer}>
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
    backgroundColor: '#FF5A5F',
    padding: 20,
  },
  linkContainer: {
    width: "100%",
    borderBottomWidth: 1.5,
    borderBottomColor: '#000',
    borderStyle: 'solid',
  },
  link: {
    color: Colors.dark,
    fontSize: 20,
    fontFamily: 'Cereal',
    paddingVertical: 8,
  },
});

export default IndexScreen;