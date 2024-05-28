import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React, { useState } from "react";
import user from "../../assets/data/user.json";
import { useForm, Controller, Control } from "react-hook-form";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";
import { IUser } from "../../types/models";
//import { launchImageLibrary } from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";

const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

type IEditableUserField = "name" | "username" | "bio" | "website";
type IEditableUser = Pick<IUser, IEditableUserField>;

interface ICustomInput {
  control: Control<IEditableUser, object>;
  label: string;
  name: IEditableUserField;
  multiline?: boolean;
  rules?: object;
}

const CustomInput = ({
  name,
  control,
  label,
  multiline = false,
  rules = {},
}: ICustomInput) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={{ flex: 1 }}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={label}
              style={[
                styles.input,
                { borderColor: error ? colors.error : colors.border },
              ]}
              multiline={multiline}
            />
            {error && (
              <Text style={{ color: colors.error }}>{error.message || ""}</Text>
            )}
          </View>
        </View>
      );
    }}
  />
);

const EditProfileScreen = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditableUser>();
  const onSubmit = (data: IEditableUser) => {
    console.warn("Submitted", data);
  };

  //   const onChangePhoto = () => {
  //     launchImageLibrary(
  //       { mediaType: "photo" },
  //       (didCancel, errorCode, errorMessage, assets) => {
  //         if (!didCancel && !errorCode) {
  //           console.log(assets);
  //         }
  //       }
  //     );
  //   };

  //   const onChangePhoto = () => {
  //     launchImageLibrary({ mediaType: "photo" }, (response) => {
  //       if (response.didCancel) {
  //         console.log("User cancelled image picker");
  //       } else if (response.errorCode) {
  //         console.log("ImagePicker Error: ", response.errorMessage);
  //       } else {
  //         const asset = response.assets && response.assets[0];
  //         console.log(asset);
  //       }
  //     });
  //   };

  const onChangePhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri);
      setSelectedPhoto(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.page}>
      <Image
        source={{ uri: selectedPhoto || user.image }}
        style={styles.avatar}
      />
      <Text onPress={onChangePhoto} style={styles.textButton}>
        Change profile photo
      </Text>

      <CustomInput
        name="name"
        control={control}
        rules={{ required: "Name is required!" }}
        label="Name"
      />
      <CustomInput
        name="username"
        control={control}
        rules={{ required: "Username is required!" }}
        label="Username"
      />
      <CustomInput
        name="website"
        control={control}
        rules={{
          pattern: {
            value: URL_REGEX,
            message: "Please enter a valid URL",
          },
        }}
        label="Website"
      />
      <CustomInput
        name="bio"
        control={control}
        rules={{ required: "Bio is required!" }}
        label="Bio"
        multiline
      />

      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
        Submit
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    alignItems: "center",
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
    borderColor: colors.border,
    borderBottomWidth: 1,
  },
});

export default EditProfileScreen;
