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

interface Props {
  listings: any[];
  category: string;
}

interface RenderRowProps {
  item: Listing;
}

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

/*   const renderRow: ListRenderItem<Listing> = ({ item }) => (

    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <View style={styles.listing}>
          <Image source={{ uri: item.medium_url }} style={styles.image} />
        </View>
      </TouchableOpacity>
    </Link>
  ); */

  const RenderRow: React.FC<RenderRowProps> = React.memo(({ item }) => (
    // Link must ADD asChild prop to work! otherwise wont see images
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <View style={styles.listing}>
          <Image source={{ uri: item.medium_url }} style={styles.image} />
          <TouchableOpacity style={{ position: 'absolute', right:40, top: 38}}>

            <Ionicons name="heart-outline" size={25} color="#fff"/>

            {/* <HeartIcon1
                width={17}
                height={17}
                color="#000"
                strokeWidth={"3"}
              /> */}

          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Link>
  ));

  const renderRow: ListRenderItem<Listing> = ({ item }) => <RenderRow item={item} />;

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
