import React, { useState } from "react";
import { Text, View, Image, SafeAreaView, Pressable } from "react-native";
import colors from "../../../src/theme/colors";
import fonts from "../../../src/theme/fonts";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Comment from "../Comment/Comment";
import { IPost } from "../../types/models";
import styles from "./styles";
import DoublePressable from "../DoublePressable";
import Carousel from "../Carousel";

interface IFeedPost {
  post: IPost;
}

const FeedPost = ({ post }: IFeedPost) => {
  const [isDesscriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded((v) => !v);
  };

  const toggleLike = () => {
    setIsLiked((v) => !v);
  };

  let content = null;
  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} onDoublePress={toggleLike} />;
  }

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
        {content}

        {/* Footer */}
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <Ionicons
              name={isLiked ? "heart" : "heart-outline"}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.accent : colors.black}
            />
          </Pressable>
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
          <Text style={{ fontWeight: fonts.weight.bold }}>
            {post.user.username}
          </Text>{" "}
          and{" "}
          <Text style={{ fontWeight: fonts.weight.bold }}>
            {post.nofLikes} others
          </Text>
        </Text>
        {/* Post Description */}
        <Text
          style={styles.text}
          numberOfLines={isDesscriptionExpanded ? 0 : 3}
        >
          <Text style={styles.bold}>
            {post.user.username} {"  "}
          </Text>
          {post.description}
        </Text>
        <Text onPress={toggleDescriptionExpanded}>
          {isDesscriptionExpanded ? "less" : "more"}
        </Text>
        {/* Comments */}
        <Text>View all {post.nofComments} comments</Text>
        {post.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}

        {/* Posted date */}

        <Text>{post.createdAt}</Text>
      </View>
    </SafeAreaView>
  );
};

export default FeedPost;
