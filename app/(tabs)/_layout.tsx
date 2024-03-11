import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import SearchIcon2 from "@/assets/svgs/search2.svg";
import SearchIcon1 from "@/assets/svgs/search1.svg";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: "Cereal",
          fontSize: 11,
        },
      }}
    >
      <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: "Explore",
            tabBarIcon: ({ color, size }) => (
              <SearchIcon2 color={color}strokeWidth={"3"} fill={color} stroke={color} />
            ),
          }}
        />

      <Tabs.Screen
        name="wishlists"
        options={{
          tabBarLabel: "Wishlists",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="trips"
        options={{
          tabBarLabel: "Trips",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="airbnb" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="inbox"
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="message-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
