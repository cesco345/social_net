import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import colors from "../../theme/colors";
import styles from "./styles";
import { IComment } from "../../types/models";

interface ICommentProps {
  comment: IComment;
}

const Comment = ({ comment }: ICommentProps) => {
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username}</Text>{" "}
        {comment.comment}
      </Text>
      <Ionicons
        name={"heart-outline"}
        size={14}
        style={styles.icon}
        color={colors.black}
      />
    </View>
  );
};

export default Comment;
