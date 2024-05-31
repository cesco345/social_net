import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type RootNaigatorParamList = {
  Home: undefined;
  Comments: { postId: string };
};

export type BottomTabNavigatorParamList = {
  HomeStack: undefined;
  Search: undefined;
  Upload: undefined;
  Notifications: undefined;
  MyProfile: undefined;
};

export type MyProfileNavigationProp = BottomTabNavigationProp<
  BottomTabNavigatorParamList,
  "MyProfile"
>;

export type MyProfileRouteProp = RouteProp<
  BottomTabNavigatorParamList,
  "MyProfile"
>;

export type HomeStackNavigatorParamList = {
  Feed: undefined;
  UserProfile: { userId: string };
};

export type UserProfileNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  "UserProfile"
>;

export type UserProfileRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  "UserProfile"
>;

export type FeedNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  "Feed"
>;

export type ProfileStackNavigatorParamsList = {
  Profile: undefined;
  "Edit Profile": undefined;
};

export type ProfileNavigationProp = NativeStackNavigationProp<
  ProfileStackNavigatorParamsList,
  "Profile"
>;
