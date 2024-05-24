import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "./src/theme/colors";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.primary }}>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
