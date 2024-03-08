import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Page = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>Login</Link>
      <Link href={"/(modals)/booking"}>Bookings</Link>
      <Link href={"/listing/1337"}>Listing details</Link>
      <Link href={"/listing/animationScreen"}>Animation Screen</Link>
      <Link href={"/listing/testpage"}>Test Page </Link>
    </View>
  );
};

export default Page;
