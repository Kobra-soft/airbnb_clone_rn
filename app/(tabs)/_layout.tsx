import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import SearchIcon2 from "@/assets/svgs/search2.svg";
import HeartIcon from "@/assets/svgs/heart.svg";
import TripsIcon1 from "@/assets/svgs/trips.svg";
import TripsIcon2 from "@/assets/svgs/trips2.svg";
import InboxIcon from "@/assets/svgs/inbox.svg";
import ProfileIcon from "@/assets/svgs/profile.svg";
import { Platform, StyleSheet, Text } from "react-native";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: Colors.grey2,
        tabBarActiveTintColor: Colors.tabBarItems_colour,
        tabBarLabelStyle: {
          fontFamily: "Cereal",
          fontSize: 11,
        },
        tabBarAllowFontScaling: true,
        tabBarStyle: Platform.OS === 'android' ? styles.androidTabBar : {},
      }}
    >
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: ({ focused, color }) => (
              <Text style={{ fontFamily: focused ? "Cereal-bold" : "Cereal", fontSize: 11, color }}>
                Explore
              </Text>
            ),
            tabBarIcon: ({ focused, color, size }) => (
              <SearchIcon2 color={color} strokeWidth={focused ? "3" : "2"} fill={color} stroke={color} />
            ),
          }}
        />

      <Tabs.Screen
          name="wishlists"
          options={{
            tabBarLabel: ({ focused, color }) => (
              <Text style={{ fontFamily: focused ? "Cereal-bold" : "Cereal", fontSize: 11, color }}>
                Wishlists
              </Text>
            ),
          tabBarIcon: ({ focused, color, size }) => (
            <HeartIcon color={color} strokeWidth={focused ? "3" : "2"} stroke={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="trips"
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ fontFamily: focused ? "Cereal-bold" : "Cereal", fontSize: 11, color }}>
                Trips
              </Text>
            ),
          tabBarIcon: ({ focused, color, size }) => (
            <TripsIcon2 color={color} strokeWidth={focused ? "3" : "2"} fill={color} width={23} height={22}/>
          ),
        }}
      />

      <Tabs.Screen
        name="inbox"
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ fontFamily: focused ? "Cereal-bold" : "Cereal", fontSize: 11, color }}>
                Inbox
              </Text>
            ),
            tabBarIcon: ({ focused, color, size }) => (
            <InboxIcon color={color} strokeWidth={focused ? "3" : "2"} fill={color} stroke={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ fontFamily: focused ? "Cereal-bold" : "Cereal", fontSize: 11, color }}>
                Profile
              </Text>
            ),
          tabBarIcon: ({ focused, color, size }) => (
            <ProfileIcon color={color} strokeWidth={focused ? "3" : "2"} fill={color} stroke={color} />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  androidTabBar: {
    height: 55,
    paddingBottom: 7,
    paddingTop: 4,
  },
});

export default Layout;
