import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import FilterIcon from "../assets/svgs/filter.svg";
import SearchIcon1 from "../assets/svgs/search1.svg";
import SearchIcon2 from "../assets/svgs/search2.svg";
import Colors from "@/constants/Colors";
import { LinearGradient } from 'expo-linear-gradient';

const categories = [
/*   {
    name: "Tiny homes",
    icon: "home",
  }, */
  {
    name: "Earth homes",
    icon: "home",
  },
/*   {
    name: "Cabins",
    icon: "cabin",
  }, */
  {
    name: "Top of the world",
    icon: "landscape",
  },
/*   {
    name: "Trending",
    icon: "local-fire-department",
  }, */
  {
    name: "Historical homes",
    icon: "castle",
  },
    {
    name: "Caves",
    icon: "house-siding",
  },
  {
    name: "Cabins",
    icon: "cabin",
  },
  {
    name: "Beachfront",
    icon: "beach-access",
  },
  {
    name: "Countryside",
    icon: "nature-people",
  },
  {
    name: "Play",
    icon: "videogame-asset",
  },
  {
    name: "City",
    icon: "apartment",
  },
];

const ExploreHeader = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  return (

    <View style={{ backgroundColor: "#000000"}}>
    <SafeAreaView style={{ backgroundColor: "#ffffff" }}>
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <Link href={"/(modals)/booking"} asChild>
            <TouchableOpacity style={styles.searchBtn}>
              <SearchIcon1 width={20} height={20} color={Colors.dark3} strokeWidth={"0"}/>
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
            <FilterIcon width={17} height={17} color={Colors.dark3} strokeWidth={"3"} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>      

    <View style={{ position: 'relative' }}>
<ScrollView
  style={{
    backgroundColor:"#ffffff",
    paddingTop: 10,
    zIndex: 0,
  }}
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}
>
      {categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.categoriesBtn}
          onPress={() => setActiveIndex(index)}
        >
          <MaterialIcons name={item.icon as any} size={24} color={activeIndex === index ? '#000' : '#727272'} />
          <View style={activeIndex === index ? styles.categoryTextContainerActive : styles.categoryTextContainer}>
            <Text style={activeIndex === index ? styles.categoryTextActive : styles.categoryText}>
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>

    <LinearGradient
  colors={['rgba(0,0,0,0.1)', 'transparent']}
  style={{
    position: 'absolute',
    width: '100%',
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
    /* height: 142, */
    height: Platform.OS === 'ios' ? 20 : 69, // Adjust the height based on the platform
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

  
  categoryText: {
    fontSize: 12,
    fontFamily: 'Cereal-medium',
    color: "#858585",
    
  },
  categoryTextActive: {
    fontSize: 12,
    fontFamily: 'Cereal-medium',
    color: "#000",
  },
  categoriesBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    /* paddingLeft: 13.5, */
    /* paddingHorizontal: 5, */
    /* backgroundColor: "#ff0000", */
    /* borderWidth: 0.5, */
    minWidth: 75, // adjust this value as needed
    paddingHorizontal: 10,
    marginLeft: 0,
    left: 4,

  },


  categoryTextContainer: {
    paddingTop: 5,
    paddingBottom: 15,
  },
  categoryTextContainerActive: {
    paddingTop: 5,
    paddingBottom: 15,
    borderBottomColor: '#000',
    borderBottomWidth: 2,
  },
});

export default ExploreHeader;
