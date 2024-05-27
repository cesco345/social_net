import { View, Text, FlatList } from "react-native";
import React from "react";
import comments from "../../assets/data/comments.json";
import Comment from "../../components/Comment";

const CommentsScreen = () => {
  return (
    <FlatList
      data={comments}
      renderItem={({ item }) => <Comment comment={item} includeDetails />}
    />
  );
};

export default CommentsScreen;