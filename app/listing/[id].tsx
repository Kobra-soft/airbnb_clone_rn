import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Share,
} from "react-native";
import listingsData from "@/assets/data/airbnb-listings2.json";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Animated, {
  SlideInDown,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { defaultStyles } from "@/constants/Styles";
import ChevronLeftIcon from "@/assets/svgs/chevron_left.svg";
import HeartIcon1 from "@/assets/svgs/heart.svg";
import StarIcon from "@/assets/svgs/star.svg";

const { width } = Dimensions.get("window");
const IMG_HEIGHT = 309;

const DetailsPage = () => {
  const { id } = useLocalSearchParams();
  const listing = (listingsData as any[]).find((item) => item.id === id);
  const navigation = useNavigation();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  if (!listing) {
    // Handle the case when listing is undefined
    // For example, to return a message or a loading spinner
    return <Text>Listing not found</Text>;
  }

  const shareListing = async () => {
    try {
      await Share.share({
        title: listing.name,
        url: listing.listing_url,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerTransparent: true,

      headerBackground: () => (
        <Animated.View
          style={[headerAnimatedStyle, styles.header]}
        ></Animated.View>
      ),
      headerRight: () => (
        <View style={styles.bar}>
          <TouchableOpacity style={styles.roundButton} onPress={shareListing}>
            <Ionicons name="share-social-sharp" size={18} color={"#000"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton}>
            {/* <Ionicons name="heart-outline" size={18} color={"#000"} /> */}
            <HeartIcon1 width={18} height={18} fill={"#fff"} stroke={"#000"} />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={18} color={"#000"} />
          {/* <ChevronLeftIcon width={20} height={20} fill={"#fff"}/> */}
        </TouchableOpacity>
      ),
    });
  }, []);

  const scrollOffset = useScrollViewOffset(scrollRef);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75],
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 1],
          ),
        },
      ],
    };
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [0, IMG_HEIGHT / 1.5], [0, 1]),
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        ref={scrollRef}
        scrollEventThrottle={16}
      >
        <Animated.Image
          source={{ uri: listing.xl_picture_url }}
          style={[styles.image, imageAnimatedStyle]}
          resizeMode="cover"
        />

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{listing.name}</Text>
          <Text style={styles.location}>
            {listing.room_type} in {listing.smart_location}
          </Text>
          <Text style={styles.rooms}>
            {listing.guests_included} guests · {listing.bedrooms} bedrooms ·{" "}
            {listing.beds} bed · {listing.bathrooms} bathrooms
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              marginBottom: 5,
            }}
          >
            {/* <Ionicons name="star" size={16} /> */}
            <StarIcon width={14} height={14} fill={"#000000"} />
            <Text style={styles.ratings}>
              {listing.review_scores_rating / 20} ·{" "}
              <Text style={{ textDecorationLine: "underline" }}>
                {listing.number_of_reviews} reviews
              </Text>
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.hostView}>
            <Image
              source={{ uri: listing.host_picture_url }}
              style={styles.host}
            />

            <View>
              <Text
                style={{
                  fontWeight: "100",
                  fontSize: 16,
                  fontFamily: "Cereal-medium",
                }}
              >
                Hosted by{" "}
                {listing.host_name.length > 25
                  ? listing.host_name.substring(0, 25) + "..."
                  : listing.host_name}
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 16,
                  fontFamily: "Cereal-light",
                }}
              >
                Host since {listing.host_since}
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.description}>{listing.description}</Text>
        </View>
      </Animated.ScrollView>

      <Animated.View
        style={defaultStyles.footer}
        entering={SlideInDown.delay(200)}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.footerText}>
            <Text style={styles.footerPrice}>€{listing.price}</Text>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 16,
                fontFamily: "Cereal-light",
              }}
            >
              night
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[defaultStyles.btn, { paddingRight: 20, paddingLeft: 20 }]}
          >
            <Text style={defaultStyles.btnText}>Reserve</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    height: IMG_HEIGHT,
    width: width,
  },
  infoContainer: {
    padding: 24,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 26,
    fontFamily: "Cereal-medium",
    lineHeight: 30,
    marginTop: 2,
  },
  location: {
    fontSize: 16,
    marginTop: 18,
    fontFamily: "Cereal-medium",
  },
  rooms: {
    fontSize: 14,
    color: Colors.dark,
    marginVertical: 4,
    fontFamily: "Cereal",
    paddingBottom: 5,
  },
  ratings: {
    fontSize: 15,
    fontFamily: "Cereal-medium",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.grey,
    marginVertical: 20,
  },
  host: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.grey,
  },
  hostView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  footerText: {
    height: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  footerPrice: {
    fontSize: 18,
    fontFamily: "Cereal",
  },
  roundButton: {
    borderRadius: 50,
    padding: 8,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    /* borderWidth: 0.5, */
    top: 1,
  },
  bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    top: 0,
  },
  header: {
    backgroundColor: "#fff",
    height: 100,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: "Cereal",
  },
});

export default DetailsPage;
