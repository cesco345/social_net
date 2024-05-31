import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { IUser } from "../../types/models";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";
import { useNavigation } from "@react-navigation/native";

interface IUserListItem {
  user: IUser;
}

const UserListItem = ({ user }: IUserListItem) => {
  const navigation = useNavigation();

  const goToUserScreen = () => {
    navigation.navigate("UserProfile", { userId: user.id });
  };
  return (
    <Pressable onPress={goToUserScreen} style={styles.root}>
      <Image source={{ uri: user.image }} style={styles.image} />
      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: fonts.weight.bold,
    marginBottom: 5,
  },
  username: {
    color: colors.gray,
  },
});

export default UserListItem;