import React from "react";
import { Image, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import user from "../../assets/data/user.json";

import ProfileHeader from "./ProfileHeader";
import FeedGridView from "../../components/FeedGridView";
import {
  UserProfileNavigationProp,
  UserProfileRouteProp,
  MyProfileNavigationProp,
  MyProfileRouteProp,
} from "../../navigation/types";

const ProfileScreen = () => {
  const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();
  const navigation = useNavigation<
    UserProfileNavigationProp | MyProfileNavigationProp
  >();

  const userId = route.params?.userId;
  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
