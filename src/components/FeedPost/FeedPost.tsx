import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import colors from "../../../src/theme/colors";
import fonts from "../../../src/theme/fonts";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

import styles from "./styles";

const FeedPost = ({ post }) => {
  return (
    <SafeAreaView>
      <View style={styles.post}>
        {/* // Header */}
        <View style={styles.header}>
          <Image
            source={{
              uri: post.user.image,
            }}
            style={styles.userAvatar}
          />
          <Text style={styles.userName}>{post.user.username}</Text>

          <Entypo
            name="dots-three-horizontal"
            size={16}
            color={colors.black}
            style={styles.threeDots}
          />
        </View>

        {/* Content */}
        <Image
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
          }}
          style={styles.image}
        />

        {/* Footer */}
        <View style={styles.iconContainer}>
          <Ionicons
            name={"heart-outline"}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{ marginLeft: "auto" }}
            color={colors.black}
          />
        </View>
        {/* Likes */}
        <Text style={styles.text}>
          Liked by{" "}
          <Text style={{ fontWeight: fonts.weight.bold }}>mpiscani</Text> and{" "}
          <Text style={{ fontWeight: fonts.weight.bold }}>66 others</Text>
        </Text>
        {/* Post Description */}
        <Text style={styles.text}>
          <Text style={styles.bold}>mpiscani</Text>
          {"  "} This is my first text, and for that reason I have requested
          that Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id,
          dolorum sequi esse voluptatum impedit et pariatur aliquam dolores!
          Offic;iis natus molestiae fuga temporibus quo quae labore libero
          repellendus voluptatibus alias.
        </Text>
        {/* Comments */}
        <Text>View all 16 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>mpiscani</Text>
            {"  "} Offic;iis natus molestiae fuga temporibus quo quae labore
            libero repellendus voluptatibus alias.
          </Text>
          <Ionicons
            name={"heart-outline"}
            size={14}
            style={styles.icon}
            color={colors.black}
          />
        </View>
        {/* Posted date */}
        <Text>December 19th, 2024</Text>
      </View>
    </SafeAreaView>
  );
};

export default FeedPost;
