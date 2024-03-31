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
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';

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
          <Animated.View style={styles.listing} entering={FadeInRight} exiting={FadeOutLeft}>
            <Animated.Image source={{ uri: item.medium_url }} style={styles.image} />
            <TouchableOpacity style={{ position: 'absolute', right: 30, top: 30 }}>
              <Ionicons name="heart-outline" size={24} color="#000" />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 16, fontFamily: 'Cereal-medium' }}>{item.name}</Text>
              <View style={{ flexDirection: 'row', gap: 4 }}>
                <Ionicons name="star" size={16} />
                <Text style={{ fontFamily: 'Cereal-medium' }}>{item.review_scores_rating / 20}</Text>
              </View>
            </View>
            <Text style={{ fontFamily: 'Cereal' }}>{item.room_type}</Text>
            <View style={{ flexDirection: 'row', gap: 4 }}>
              <Text style={{ fontFamily: 'Cereal-medium' }}>€ {item.price}</Text>
              <Text style={{ fontFamily: 'Cereal' }}>night</Text>
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
    height: 300,
    borderRadius: 13,
  }
});

export default Listings;
