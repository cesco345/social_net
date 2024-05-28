import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import CommentsScreen from "./src/screens/CommentsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const App = () => {
  return (
    <View style={styles.app}>
      {/* <HomeScreen /> */}
      {/* <CommentsScreen /> */}
      <ProfileScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: 50,
  },
});

export default App;
