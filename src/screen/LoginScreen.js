import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import React, { useState } from "react";

import { StackActions } from "@react-navigation/native";

import { TEXT_FORMAT_STYLE, TEXT_STYLES } from "../styles";

import Input from "../components/Input";

import Button from "../components/Button";
import ButtonGroupContainer from "../components/containers/ButtonGroupContainer";

import ABCConsultingCompanyLogo from "../../assets/svg/ABCConsultingCompanyLogo";
import BackIcon from "../../assets/svg/BackIcon";

const LoginScreen = ({ navigation }) => {
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");

  const goToRegisterScreen = () => {
    navigation.dispatch(StackActions.replace("Register"));
  };

  const goToWelcomeScreen = () => {
    navigation.dispatch(StackActions.replace("Welcome"));
  };

  const login = () => {
    if (email !== "" && password !== "") {
      navigation.dispatch(StackActions.replace("Home"));
    } else {
      Alert.alert("Terjadi kesalahan", "Email dan kata sandi harus diisi.");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" animated={true} translucent={false} />

      <TouchableOpacity onPress={goToWelcomeScreen} style={{ marginBottom: 8 }}>
        <BackIcon style={{ width: 40, height: 40 }} />
      </TouchableOpacity>

      <Text style={{ ...TEXT_FORMAT_STYLE.HEADING_1, marginBottom: 12 }}>
        Login
      </Text>
      <Text style={{ ...TEXT_FORMAT_STYLE.PARAGRAPH, marginBottom: 12 }}>
        Masuk untuk mengakses Aplikasi C3
      </Text>

      <View>
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
        <Button type="primary" text="Login" onPress={login} />
      </ButtonGroupContainer>

      <Text style={{ ...TEXT_STYLES.INTER_REGULAR, marginTop: 12 }}>
        Belum punya akun?
      </Text>
      <TouchableOpacity style={{ marginTop: 2 }} onPress={goToRegisterScreen}>
        <Text
          style={{
            ...TEXT_STYLES.INTER_REGULAR,
            color: "#333533",
            textDecorationLine: "underline",
          }}
        >
          Daftar di sini.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 12,
  },
});
