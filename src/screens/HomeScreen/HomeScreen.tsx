import React from "react";
import { FlatList } from "react-native";
import posts from "../../../src/assets/data/posts.json";

import FeedPost from "../../../src/components/FeedPost";

const HomeScreen = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <FeedPost post={item} />} // { item, index }
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};
export default HomeScreen;
