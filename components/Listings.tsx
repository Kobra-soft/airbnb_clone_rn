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
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";

interface Props {
  listings: any[];
  category: string;
}

/* interface RenderRowProps {
  item: Listing;
} */

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Listings = ({ listings: items, category }: Props) => {
  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlatList>(null);

  // Regular expression for checking if a string is a valid URL
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

  // State for the items with images that loaded successfully
  const [itemsWithImages, setItemsWithImages] = useState(
    items.filter((item) => urlRegex.test(item.xl_picture_url)),
  );

  useEffect(() => {
    console.log("RELOAD LISTINGS", items.length);
    setLoading(true);

    // Shuffle and filter the items array
    const shuffledItems = shuffleArray([...items]);
    const filteredItems = shuffledItems.filter((item) =>
      urlRegex.test(item.xl_picture_url),
    );

    setItemsWithImages(filteredItems);

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
/*        entering={FadeInRight}
          exiting={FadeOutLeft} */
        >
          {/*           <Animated.Image
            source={{ uri: item.xl_picture_url }}
            style={styles.image}
            onError={() => {
              setItemsWithImages((prevItems) =>
                prevItems.filter((i) => i.id !== item.id),
              );
            }}
          /> */}

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
            } // Update the state when the icon is pressed
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
              paddingTop: 13,
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
              <Ionicons name="star" size={13} />
              <Text style={{ fontFamily: "Cereal", fontSize: 15 }}>
                {item.review_scores_rating / 20}
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontFamily: "Cereal",
              fontSize: 15,
              paddingTop: 4,
              color: "#717171",
            }}
          >
            Hosted by {item.host_name}
          </Text>

{/*           <Text
            style={{
              fontFamily: "Cereal",
              fontSize: 15,
              paddingTop: 4,
              color: "#717171",
            }}
          >
            £{item.price} per night
          </Text> */}

          <View
            style={{
              paddingTop: 0,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontFamily: "Cereal", fontSize: 15, paddingTop: 4, color: "#717171" }}>
            {/* Minimum stay: {item.minimum_nights} */}
          </Text>
            <View
              style={{ flexDirection: "column", gap: 4, alignItems: "center" }}
            >
          <Text style={{ fontFamily: "Cereal", fontSize: 15, paddingTop: 4, color: "#717171" }}>
            £{item.price} per night
          </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", gap: 4, marginTop: 10 }}>
            <Text style={{ textDecorationLine: "underline" }}>
              <Text style={{ fontFamily: "Cereal-bold", fontSize: 16 }}>
                £{item.price * item.minimum_nights}
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
      {/*       <FlatList
        renderItem={renderRow}
        ref={listRef}
        data={loading ? [] : itemsWithImages}
      /> */}
      <FlatList
        key={itemsWithImages.length} // add this line
        renderItem={renderRow}
        ref={listRef}
        data={loading ? [] : itemsWithImages}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listing: {
    padding: 25,
    marginTop: 0,
  },
  image: {
    width: "100%",
    height: 345,
    borderRadius: 13,
    backgroundColor: "#f5f5f5",
  },
});

export default Listings;
