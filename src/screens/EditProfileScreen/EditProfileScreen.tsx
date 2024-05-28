import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";
import user from "../../assets/data/user.json";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

interface ICustomInput {
  label: string;
  multiline?: boolean;
}

const CustomInput = ({ label }: ICustomInput) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput placeholder={label} style={styles.input} />
  </View>
);

const EditProfileScreen = () => {
  const onSubmit = () => {
    console.warn("Submitted");
  };
  return (
    <View style={styles.page}>
      <Image source={{ uri: user.image }} style={styles.avatar} />
      <Text style={styles.textButton}>Change profile photo</Text>

      <CustomInput label="Name" />
      <CustomInput label="Username" />
      <CustomInput label="Website" />
      <CustomInput label="Bio" multiline />

      <Text onPress={onSubmit} style={styles.textButton}>
        Submit
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    alignItems: "center",
    flex: 1,
    padding: 10,
  },
  avatar: {
    width: "30%",
    aspectRatio: 1,
    borderRadius: 100,
  },
  textButton: {
    color: colors.primary,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,

    margin: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  label: {
    width: 75,
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderBottomWidth: 1,
    borderRadius: 5,
    marginTop: 5,
  },
});

export default EditProfileScreen;
