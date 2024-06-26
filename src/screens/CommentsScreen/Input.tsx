import React, { useState } from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

const Input = () => {
  const [newComment, setNewComment] = useState(" ");
  const onPost = () => {
    console.warn("Posting comment: ", newComment);
    setNewComment("");
  };

  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
        }}
        style={styles.image}
      />
      <TextInput
        value={newComment}
        onChangeText={setNewComment}
        placeholder="Add a comment..."
        style={styles.input}
        multiline
      />
      <Text onPress={onPost} style={styles.button}>
        POST
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    padding: 5,
    borderTopWidth: 1,
    borderColor: colors.border,
    alignItems: "flex-end",
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
  },
  input: {
    flex: 1,

    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,

    paddingVertical: 5,
    paddingRight: 45,
    paddingHorizontal: 10,
    marginLeft: 5,
  },
  button: {
    position: "absolute",
    right: 15,
    bottom: 15,
    fontSize: fonts.size.sm,
    fontWeight: fonts.weight.semi,
    color: colors.primary,
  },
});

export default Input;
