// ProfileNavigationItemComponent.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import ChevronRight from "../assets/svgs/chevron_right.svg";

type IconName =
  | "settings-outline"
  | "accessibility-outline"
  | "information-circle-outline"
  | "help-circle-outline"
  | "document-text-outline"
  | "book-outline";

interface Props {
  icon: IconName;
  text: string;
  size?: number;
}

const ProfileNavItemComponent: React.FC<Props> = ({
  icon,
  text,
  size = 24,
}) => {
  return (
    <TouchableOpacity style={styles.item}>
      {typeof icon === "string" ? (
        <Ionicons name={icon} size={size} color="black" />
      ) : (
        icon
      )}
      <Text style={styles.text}>{text}</Text>
      <ChevronRight width={16} height={16} strokeWidth={2} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey_separator,
  },
  text: {
    flex: 1,
    marginLeft: 16,
    fontFamily: "Cereal",
    color: Colors.dark,
    fontSize: 15.666,
  },
});

export default ProfileNavItemComponent;
