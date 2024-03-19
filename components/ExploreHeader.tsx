import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  Image,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  LayoutChangeEvent,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import FilterIcon from "../assets/svgs/filter.svg";
import SearchIcon1 from "../assets/svgs/search1.svg";
import Colors from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";
import { Dimensions } from "react-native";

interface Props {
  onCategoryChanged: (category: string) => void;
}

const ExploreHeader = ({ onCategoryChanged }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const flatListRef = useRef<FlatList | null>(null);

  const categories2 = [
    {
      name: "Earth homes",
      icon: require("../assets/images/EarthHomes2.png"),
      selectedIcon: require("../assets/images/EarthHomes.jpg"),
    },
    {
      name: "Top of the world",
      icon: require("../assets/images/TopWorld2.png"),
      selectedIcon: require("../assets/images/TopWorld.jpg"),
    },
    {
      name: "Caves",
      icon: require("../assets/images/Caves2.png"),
      selectedIcon: require("../assets/images/Caves.jpg"),
    },
    {
      name: "Cabins",
      icon: require("../assets/images/Cabins2.png"),
      selectedIcon: require("../assets/images/Cabins.jpg"),
    },
    {
      name: "Beachfront",
      icon: require("../assets/images/BeachFront2.png"),
      selectedIcon: require("../assets/images/BeachFront.jpg"),
    },
    {
      name: "Countryside",
      icon: require("../assets/images/CountrySide2.png"),
      selectedIcon: require("../assets/images/CountrySide.jpg"),
    },
    {
      name: "Play",
      icon: require("../assets/images/Play2.png"),
      selectedIcon: require("../assets/images/Play.jpg"),
    },
    {
      name: "Historical homes",
      icon: require("../assets/images/HistoricalHomes2.png"),
      selectedIcon: require("../assets/images/HistoricalHomes.jpg"),
    },
    {
      name: "Iconic cities",
      icon: require("../assets/images/IconicCities2.png"),
      selectedIcon: require("../assets/images/IconicCities.jpg"),
    },
    {
      name: "OMG!",
      icon: require("../assets/images/Omg2.png"),
      selectedIcon: require("../assets/images/Omg.jpg"),
    },
    {
      name: "Earth homes",
      icon: require("../assets/images/EarthHomes2.png"),
      selectedIcon: require("../assets/images/EarthHomes.jpg"),
    },
    {
      name: "Top of the world",
      icon: require("../assets/images/TopWorld2.png"),
      selectedIcon: require("../assets/images/TopWorld.jpg"),
    },
    {
      name: "Caves",
      icon: require("../assets/images/Caves2.png"),
      selectedIcon: require("../assets/images/Caves.jpg"),
    },
    {
      name: "Cabins",
      icon: require("../assets/images/Cabins2.png"),
      selectedIcon: require("../assets/images/Cabins.jpg"),
    },
    {
      name: "Beachfront",
      icon: require("../assets/images/BeachFront2.png"),
      selectedIcon: require("../assets/images/BeachFront.jpg"),
    },
    {
      name: "Countryside",
      icon: require("../assets/images/CountrySide2.png"),
      selectedIcon: require("../assets/images/CountrySide.jpg"),
    },
    {
      name: "Play",
      icon: require("../assets/images/Play2.png"),
      selectedIcon: require("../assets/images/Play.jpg"),
    },
    {
      name: "Historical homes",
      icon: require("../assets/images/HistoricalHomes2.png"),
      selectedIcon: require("../assets/images/HistoricalHomes.jpg"),
    },
    {
      name: "Iconic cities",
      icon: require("../assets/images/IconicCities2.png"),
      selectedIcon: require("../assets/images/IconicCities.jpg"),
    },
    {
      name: "OMG!",
      icon: require("../assets/images/Omg2.png"),
      selectedIcon: require("../assets/images/Omg.jpg"),
    },
    {
      name: "Earth homes",
      icon: require("../assets/images/EarthHomes2.png"),
      selectedIcon: require("../assets/images/EarthHomes.jpg"),
    }
  ];

  const selectCategory = async (index: number) => {
    setActiveIndex(index);
    setIsCategorySelected(true);

    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onCategoryChanged(categories2[index].name);
  };

  useEffect(() => {
    if (isCategorySelected) {
      flatListRef.current?.scrollToIndex({
        index: activeIndex,
        animated: true,
      });
      setIsCategorySelected(false);
    }
  }, [activeIndex, isCategorySelected]);

  return (
    <View style={{ backgroundColor: "#ffffff" }}>
      <SafeAreaView style={{ backgroundColor: "#ffffff" }}>
        <View style={styles.container}>
          <View style={styles.actionRow}>
            <Link href={"/(modals)/booking"} asChild>
              <TouchableOpacity style={styles.searchBtn}>
                <SearchIcon1
                  width={20}
                  height={20}
                  color={Colors.dark3}
                  strokeWidth={"0"}
                />
                <View>
                  <Text
                    style={{
                      marginBottom: 2,
                      fontSize: 14.0,
                      fontFamily: "Cereal-medium",
                      color: Colors.dark2,
                    }}
                  >
                    Where to?
                  </Text>
                  <Text
                    style={{
                      fontSize: 12.1,
                      fontFamily: "Cereal",
                      color: Colors.grey2,
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
              <FilterIcon
                width={17}
                height={17}
                color={Colors.dark3}
                strokeWidth={"3"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      <View style={styles.container2}>
        <FlatList
        style={{paddingLeft:9}}
          ref={flatListRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => selectCategory(index)}
                style={
                  activeIndex === index
                    ? styles.categoriesBtnActive
                    : styles.categoriesBtn
                }
              >
                <Image
                  source={activeIndex === index ? item.selectedIcon : item.icon}
                  style={styles.categoryIcon}
                />
                <Text
                  style={
                    activeIndex === index
                      ? styles.categoryTextActive
                      : styles.categoryText
                  }
                >
                  {item.name}
                </Text>
              </TouchableOpacity>

          )}
        />
        <LinearGradient
          colors={["rgba(0,0,0,0.1)", "transparent"]}
          style={{
            position: "absolute",
            width: "100%",
            height: 4,
            bottom: -4,
            zIndex: 1,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: Platform.OS === "ios" ? 20 : 69,
    paddingTop: Platform.OS === "android" ? 8 : 0,
  },
  container2: {
    backgroundColor: "#ffffff",
    paddingRight: 0,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  searchBtn: {
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 17,
    alignItems: "center",
    width: "86.5%",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#c2c2c2",
    borderRadius: 30,
    elevation: 7,
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

  //// style={{ width: 24, height: 24 }}
  categoryIcon: {
    width: 24,
    height: 24,
    bottom: 3,
  },

  categoryText: {
    fontSize: 12,
    fontFamily: "Cereal-medium",
    color: "#858585",
    paddingTop: 8,
    bottom: 1,
  },
  categoryTextActive: {
    fontSize: 12,
    fontFamily: "Cereal-medium",
    color: "#000",
    paddingTop: 8,
    bottom: 1,
  },
  categoriesBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    paddingVertical:12,
    marginHorizontal: 10,
  },
  categoriesBtnActive: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    paddingVertical:12,
    marginHorizontal: 10,

    borderBottomColor: "#000",
    borderBottomWidth: 2,
  },
});

export default ExploreHeader;
