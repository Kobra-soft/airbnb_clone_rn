import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import { Link } from "expo-router";
import { Listing } from "@/interfaces/listing";
import { Ionicons } from "@expo/vector-icons";
import HeartIcon1 from "../assets/svgs/heart.svg";
import HeartIcon2 from "../assets/svgs/heart2.svg";
import StarIcon from "../assets/svgs/star.svg";
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";
import { format } from "date-fns";

interface Props {
  listings: any[];
  category: string;
}

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// RANDOM DATE FORMATTER
// Generates random dates for the listings
// 

// Function to generate a random date range for the next month
const generateDateRange = (duration: number) => {
  // Get the current date
  const currentDate = new Date();

  // Get the next month
  const nextMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
  );

  // Get the number of days in the next month
  const daysInMonth = new Date(
    nextMonth.getFullYear(),
    nextMonth.getMonth() + 1,
    0,
  ).getDate();

  // Generate a random start day for the booking
  const startDay = Math.floor(Math.random() * (daysInMonth - duration + 1)) + 1; // Random day between 1 and (daysInMonth - duration + 1)
  // Calculate the end day for the booking
  const endDay = startDay + duration - 1;
  // Format the start and end dates
  const startDate = format(
    new Date(nextMonth.getFullYear(), nextMonth.getMonth(), startDay),
    "d",
  );

  const endDate = format(
    new Date(nextMonth.getFullYear(), nextMonth.getMonth(), endDay),
    "d MMMM",
  );

  return `${startDate}-${endDate}`;
};

const Listings = ({ listings: items, category }: Props) => {
  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlatList>(null);

  // Regular expression for checking if a string is a valid URL
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

  // State for the items with images that loaded successfully
  const [itemsWithImages, setItemsWithImages] = useState<any[]>([]);

  useEffect(() => {
    console.log("RELOAD LISTINGS", items.length);
    setLoading(true);

    // Shuffle and filter the items array
    const shuffledItems = shuffleArray([...items]);
    const filteredItems = shuffledItems.filter((item) =>
      urlRegex.test(item.xl_picture_url),
    );

    // Generate a date range for each item
    const itemsWithDates = filteredItems.map((item) => {
      const duration = Math.floor(Math.random() * 6) + 2; // Random number between 2 and 7
      const dateRange = generateDateRange(duration);

      return {
        ...item,
        dateRange,
        duration,
      };
    });

    setItemsWithImages(itemsWithDates);

    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, [category]);

  // Add a new state variable for tracking the press status of the heart icons
  const [heartPressedStatus, setHeartPressedStatus] = useState<
    Record<string, boolean>
  >({});

  // Render one listing row for the FlatList
  const renderRow: ListRenderItem<any> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <Animated.View
          style={styles.listing}
          /* entering={FadeInRight}
          exiting={FadeOutLeft} */
        >
          <Animated.Image
            source={{ uri: item.xl_picture_url }}
            style={styles.image}
            onError={(error) => {
              error.nativeEvent.error && console.log(item.xl_picture_url);
              error.nativeEvent.error &&
                (item.xl_picture_url = "placeholder_image_url");
            }}
          />
          <TouchableOpacity
            style={{ position: "absolute", right: 40, top: 40 }}
            onPress={() =>
              setHeartPressedStatus((prevState) => ({
                ...prevState,
                [item.id]: !prevState[item.id],
              }))
            }
          >
            <HeartIcon2
              width={24}
              height={24}
              fill={
                heartPressedStatus[item.id] ? "#FF395C" : "rgba(0, 0, 0, 0.5)"
              }
              style={{}}
            />
          </TouchableOpacity>
          <View
            style={{
              paddingTop: 11,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 16, fontFamily: "Cereal-medium" }}>
              {item.city}, {item.country}
            </Text>
            <View
              style={{ flexDirection: "row", gap: 4, alignItems: "center" }}
            >
              {/* <Ionicons name="star" size={13} /> */}
              <StarIcon
              width={12}
              height={12}
              fill={"#000000"}
            />

              <Text style={{ fontFamily: "Cereal", fontSize: 15 }}>
                {item.review_scores_rating / 20}
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontFamily: "Cereal",
              fontSize: 15,
              paddingTop: 3,
              color: "#717171",
            }}
          >
            Hosted by {item.host_name.length > 20 ? item.host_name.substring(0, 20) + '...' : item.host_name}
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: "Cereal",
                fontSize: 15,
                paddingTop: 3,
                color: "#717171",
              }}
            >
              {item.dateRange}
            </Text>
            <View
              style={{ flexDirection: "column", gap: 4, alignItems: "center" }}
            >
              <Text
                style={{
                  fontFamily: "Cereal",
                  fontSize: 15,
                  paddingTop: 0,
                  color: "#717171",
                }}
              >
                £{item.price} per night
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", gap: 4, marginTop: 7 }}>
            <Text style={{ textDecorationLine: "underline" }}>
              <Text style={{ fontFamily: "Cereal-bold", fontSize: 16 }}>
                £{(item.price * item.duration).toLocaleString()}
              </Text>
              <Text style={{ fontFamily: "Cereal", fontSize: 16 }}> total</Text>
            </Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={defaultStyles.container}>
      <FlatList
        key={itemsWithImages.length}
        renderItem={renderRow}
        ref={listRef}
        data={loading ? [] : itemsWithImages}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listing: {
    paddingTop: 23,
    paddingBottom: 18,
    paddingHorizontal: 24,
    marginTop: 0,
  },
  image: {
    width: "100%",
    height: 346,
    borderRadius: 13,
    backgroundColor: "#f5f5f5",
  },
});

export default Listings;
