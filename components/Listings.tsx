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

const Listings = ({ listings: items, category }: Props) => {
  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    console.log("RELOAD LISTINGS", items.length);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  // Render one listing row for the FlatList
  const renderRow: ListRenderItem<any> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <Animated.View
          style={styles.listing}
          entering={FadeInRight}
          exiting={FadeOutLeft}
        >
          <Animated.Image
            source={{ uri: item.medium_url }}
            style={styles.image}
          />
          <TouchableOpacity
            style={{ position: "absolute", right: 40, top: 38 }}
          >
            <Ionicons name="heart-outline" size={24} color="#000" />
          </TouchableOpacity>

          <View
            style={{
              paddingTop: 13,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {/* <Text style={{ fontSize: 16, fontFamily: 'Cereal-medium' }}>{item.name}</Text> */}
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
          <Text style={{ fontFamily: "Cereal", fontSize: 15, paddingTop: 4, color: "#717171" }}>
            Hosted by {item.host_name}
          </Text>
            
          <View
            style={{
              paddingTop: 0,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontFamily: "Cereal", fontSize: 15, paddingTop: 4, color: "#717171" }}>
            Minimum stay: {item.minimum_nights}
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
      <FlatList
        renderItem={renderRow}
        ref={listRef}
        data={loading ? [] : items}
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
  },
});

export default Listings;
