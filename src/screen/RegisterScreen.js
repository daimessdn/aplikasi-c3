import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import React, { useState } from "react";

import { StackActions } from "@react-navigation/native";

import { TEXT_FORMAT_STYLE, TEXT_STYLES } from "../styles";

import Input from "../components/Input";

import Button from "../components/Button";
import ButtonGroupContainer from "../components/containers/ButtonGroupContainer";

import BackIcon from "../../assets/svg/BackIcon";

const RegisterScreen = ({ navigation }) => {
  const [name, changeName] = useState("");
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");

  const register = () => {
    if (name !== "" && email !== "" && password !== "") {
      navigation.dispatch(StackActions.replace("Home"));
    } else {
      Alert.alert("Terjadi kesalahan", "Nama, alamat email, dan kata sandi harus diisi.");
    }
  };

  const goToLoginScreen = () => {
    navigation.dispatch(StackActions.replace("Login"));
  };

  const goToWelcomeScreen = () => {
    navigation.dispatch(StackActions.replace("Welcome"));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" animated={true} translucent={false} />

      <TouchableOpacity onPress={goToWelcomeScreen} style={{ marginBottom: 8 }}>
        <BackIcon style={{ width: 40, height: 40 }} />
      </TouchableOpacity>

      <Text style={{ ...TEXT_FORMAT_STYLE.HEADING_1, marginBottom: 12 }}>
        Register
      </Text>
      <Text style={{ ...TEXT_FORMAT_STYLE.PARAGRAPH, marginBottom: 12 }}>
        Registrasi untuk mengakses Aplikasi C3 pertama kalinya
      </Text>

      <View>
        <Input
          label="Nama lengkap"
          value={name}
          onChangeText={(text) => changeName(text)}
          placeholder="Masukan nama lengkap"
        />
        <Input
          label="Alamat email"
          value={email}
          onChangeText={(text) => changeEmail(text)}
          placeholder="Masukan alamat email"
          keyboardType="email-address"
        />
        <Input
          label="Kata sandi"
          value={password}
          onChangeText={(text) => changePassword(text)}
          placeholder="Masukan kata sandi"
          secureTextEntry={true}
        />
      </View>

      <ButtonGroupContainer>
        <Button type="primary" text="Login" onPress={() => register} />
      </ButtonGroupContainer>

      <Text style={{ ...TEXT_STYLES.INTER_REGULAR, marginTop: 12 }}>
        Sudah punya akun?
      </Text>
      <TouchableOpacity style={{ marginTop: 2 }} onPress={goToLoginScreen}>
        <Text
          style={{
            ...TEXT_STYLES.INTER_REGULAR,
            color: "#333533",
            textDecorationLine: "underline",
          }}
        >
          Login di sini.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 12,
  },
});
