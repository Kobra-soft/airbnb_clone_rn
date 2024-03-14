import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { Link } from "expo-router";

const InboxScreen = () => {
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
        <Text style={defaultStyles.textTitleHeadings}>Inbox</Text>
        <View style={styles.separatorView}>
          <View
            style={{
              flex: 1,
              borderBottomColor: Colors.grey_separator,
              borderBottomWidth: 1,
            }}
          />
        </View>
        <Text style={defaultStyles.textHeadings2}>Log in to read messages</Text>
        <Text style={defaultStyles.textSubHeadings}>
          Once you log in, you'll find messages from hosts here.
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

export default InboxScreen;

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
