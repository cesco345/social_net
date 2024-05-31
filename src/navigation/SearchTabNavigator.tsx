import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CommentsScreen from "../screens/CommentsScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SearchTabNavigatorParamList } from "./types";
import UserSearchScreen from "../screens/UserSearchScreen/UserSearchScreen";

const Tab = createMaterialTopTabNavigator<SearchTabNavigatorParamList>();

const SearchTabNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: {} }}>
      <Tab.Screen name="Users" component={UserSearchScreen} />
      <Tab.Screen name="Posts" component={CommentsScreen} />
    </Tab.Navigator>
  );
};

export default SearchTabNavigator;
