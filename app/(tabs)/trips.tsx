import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { Link } from "expo-router";

const TripsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 0,
          justifyContent: "space-between",
          bottom: 0,
          paddingHorizontal: 23,
        }}
      >
        <Text style={defaultStyles.textTitleHeadings}>Trips</Text>
        <View style={styles.separatorView}>
          <View
            style={{
              flex: 1,
              borderBottomColor: Colors.grey_separator,
              borderBottomWidth: 1,
            }}
          />
        </View>
        <Text style={defaultStyles.textHeadings2}>No trips yet</Text>
        <Text style={defaultStyles.textSubHeadings}>
          When you're ready to plan your next trip, we're here to help.
        </Text>
        <View style={{ alignItems: "stretch", width: 94, marginTop: 13 }}>
          <TouchableOpacity style={defaultStyles.btn}>
            <Link href={"/(modals)/login"}>
              <Text style={defaultStyles.btnText}>Log in</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TripsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  separatorView: {
    flexDirection: "row",
    marginVertical: 32,
  },
  separator: {
    fontFamily: "Cereal",
    color: Colors.grey,
    fontSize: 13,
  },
});
