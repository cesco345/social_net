import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

const styles = StyleSheet.create({
    post: {},
    image: {
      width: "100%",
      aspectRatio: 1,
    },
    header: {
      flexDirection: "row",
      padding: 10,
      alignItems: "center",
      paddingTop: 10,
    },
    userAvatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
      paddingBottom: 10,
    },
    userName: {
      fontWeight: fonts.weight.bold,
      color: colors.black,
    },
    threeDots: {
      marginLeft: "auto",
    },
    footer: {
      padding: 10,
    },
    iconContainer: {
      flexDirection: "row",
      padding: 10,
    },
    icon: {
      marginHorizontal: 5,
    },
    text: {
      color: colors.black,
      lineHeight: 18,
    },
    bold: {
      fontWeight: fonts.weight.bold,
    },

  });

  export default styles;