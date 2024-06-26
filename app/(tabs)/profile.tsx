import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { useNavigation, Link } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileNavItemComponent from "@/components/ProfileNavItemComponent";
import CrossIcon from "@/assets/svgs/cross.svg";
import HelpIcon from "@/assets/svgs/help.svg";

interface Props {
  icon: IconName | React.ReactNode;
  text: string;
  size?: number;
}

type IconName =
  | "settings"
  | "accessibility"
  | "information-circle"
  | "help-circle"
  | "document-text"
  | "settings-outline"
  | "accessibility-outline"
  | "information-circle-outline"
  | "help-circle-outline"
  | "document-text-outline";

const ProfileScreen = () => {
  const { signOut, isSignedIn } = useAuth();
  const navigation = useNavigation();

  const handleSignOutAndGoBack = () => {
    signOut();
    navigation.goBack();
  };

  {
    /* if user not signed in then show login link / DISABLED FOR NOW
      {!isSignedIn && (
        <Link href={'/(modals)/login'}>
          <Text>Login</Text>
        </Link>
      )} */
  }

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
        <Text style={defaultStyles.textTitleHeadings}>Your profile</Text>
        <Text style={defaultStyles.textSubHeadings2}>
          Log in to start planning your next trip.
        </Text>
        <View style={{ alignItems: "stretch", marginTop: 13 }}>
          <TouchableOpacity style={defaultStyles.btn}>
            <Link href={"/(modals)/login"}>
              <Text style={defaultStyles.btnText}>Log in</Text>
            </Link>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 4,
            paddingBottom: 22,
          }}
        >
          <Text
            style={[
              defaultStyles.textSubHeadings3_mini,
              {
                color: Colors.dark,
                fontFamily: "Cereal",
              },
            ]}
          >
            Don't have an account?
          </Text>
          <TouchableOpacity style={defaultStyles.textSubHeadings3_mini}>
            <Link href={"/(modals)/login"}>
              <Text
                style={[
                  defaultStyles.textSubHeadings3_mini,
                  {
                    textDecorationLine: "underline",
                    color: Colors.dark,
                    fontFamily: "Cereal-medium",
                  },
                ]}
              >
                Sign up
              </Text>
            </Link>
          </TouchableOpacity>
        </View>

        <View>
          <ProfileNavItemComponent
            icon="settings-outline"
            text="Settings"
          />
          <ProfileNavItemComponent
            icon="accessibility-outline"
            text="Accessibility"
          />
          <ProfileNavItemComponent
            icon="information-circle-outline"
            text="Learn about hosting"
          />
          <ProfileNavItemComponent
            icon="help-circle-outline"
            text="Get help"
          />
          <ProfileNavItemComponent
            icon="document-text-outline"
            text="Terms of Service"
          />
          <ProfileNavItemComponent
            icon="document-text-outline"
            text="Privacy Policy"
          />
          <ProfileNavItemComponent
            icon="book-outline"
            text="Open source licences"
          />
        </View>

        <View
          style={{
            paddingTop: 13,
          }}
        >
          <Text
            style={[
              defaultStyles.textSubHeadings3_mini,
              {
                color: Colors.dark,
                fontFamily: "Cereal",
              },
            ]}
          >
            Version 24.13 (28003186)
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 0,
  },
  separatorView: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    marginVertical: 16,
  },
  separator: {
    fontFamily: "Cereal",
    color: Colors.grey,
    fontSize: 13,
  },
  btnOutline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "Cereal-medium",
    left: 14,
  },
});

export default ProfileScreen;
