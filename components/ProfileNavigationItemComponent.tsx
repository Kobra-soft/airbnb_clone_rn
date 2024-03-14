// ProfileNavigationItemComponent.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

type IconName = "text" | "key" | "push" | "map" | "filter" | "at" | "link" | "search" | "image" | "alert" | "checkbox" | "menu" | "radio" | "timer" | "close" | "book" | "pause" | "mail" | "home" | "woman-sharp";

interface Props {
  icon: IconName;
  text: string;
}

const ProfileNavigationItemComponent: React.FC<Props> = ({ icon, text }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Ionicons name={icon} size={26} color="black" />
      <Text style={styles.text}>{text}</Text>
      <Ionicons name="chevron-forward" size={19} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
text: {
    flex: 1,
    marginLeft: 16,
    fontFamily: "Cereal",
    color: Colors.dark,
    fontSize: 15.666,
},
});

export default ProfileNavigationItemComponent;