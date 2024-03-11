import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";
import React from "react";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import FilterIcon from "../assets/svgs/filter.svg";
import SearchIcon1 from "../assets/svgs/search1.svg";
import SearchIcon2 from "../assets/svgs/search2.svg";

/* import { SvgXml } from 'react-native-svg'; */
/* const filterSvgWithColor = filterSvg.replace('currentColor', '#000000'); */

const categories = [
  {
    name: "Tiny homes",
    icon: "home",
  },
  {
    name: "Cabins",
    icon: "house-siding",
  },
  {
    name: "Trending",
    icon: "local-fire-department",
  },
  {
    name: "Play",
    icon: "videogame-asset",
  },
  {
    name: "City",
    icon: "apartment",
  },
  {
    name: "Beachfront",
    icon: "beach-access",
  },
  {
    name: "Countryside",
    icon: "nature-people",
  },
];

const ExploreHeader = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <Link href={"/(modals)/booking"} asChild>
            <TouchableOpacity style={styles.searchBtn}>
              {/* <Ionicons name="search" size={24} /> */}

              {/* <SearchIcon1 width={17} height={17} color={"#000000"} strokeWidth={"3"} /> */}
              <SearchIcon1 width={20} height={20} color={"#222222"} strokeWidth={"0"}/>

              <View>
                <Text
                  style={{
                    marginBottom: 2,
                    fontSize: 14.0,
                    fontFamily: "Cereal-medium",
                    color: "#222222",
                  }}
                >
                  Where to?
                </Text>
                <Text
                  style={{
                    fontSize: 12.1,
                    fontFamily: "Cereal",
                    color: "#717171",
                  }}
                >
                  Anywhere · Any week · Add guests
                </Text>
              </View>
            </TouchableOpacity>
          </Link>

          <TouchableOpacity
            style={[styles.filterBtn, { transform: [{ rotate: "0deg" }] }]}
          >
            {/* <Ionicons name="options-outline" size={20} /> */}
            {/* <FontAwesome6 name="sliders" size={15} color="black" /> */}
            {/* <FilterIcon width={15} height={15} stroke="#000000" /> */}
            {/* <SvgXml xml={filterSvg} width="15" height="15" stroke="#000000" /> */}
            {/* <SvgXml xml={filterSvgWithColor} width="15" height="15" /> */}
            <FilterIcon width={17} height={17} color={"#222222"} strokeWidth={"3"} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 142,
    paddingTop: Platform.OS === "android" ? 8 : 0,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    /* paddingBottom: 16, */
  },
  searchBtn: {
    backgroundColor: "#fff",
    flexDirection: "row",
    
    // padding top and bottom
    paddingVertical: 10,

    // moves search icon from the left
    paddingHorizontal: 20,

    // gap from search icon to text
    gap: 17,

    alignItems: "center",
    width: "86.5%",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#c2c2c2",
    borderRadius: 30,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  filterBtn: {
    padding: 11,
    borderWidth: 1,
    borderColor: "#A2A0A2",
    borderRadius: 24,

    marginLeft: 10,
  },
});

export default ExploreHeader;
