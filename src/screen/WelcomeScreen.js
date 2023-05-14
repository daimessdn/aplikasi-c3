import { StyleSheet, Text, ToastAndroid, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { StackActions } from "@react-navigation/native";

import React, { useEffect } from "react";

import { TEXT_FORMAT_STYLE } from "../styles";

import Button from "../components/Button";
import ButtonGroupContainer from "../components/containers/ButtonGroupContainer";
import ABCConsultingCompanyLogo from "../../assets/svg/ABCConsultingCompanyLogo";

const WelcomeScreen = ({ navigation, route }) => {
  const goToLoginScreen = () => {
    navigation.dispatch(
      StackActions.replace('Login')
    );
  }

  const goToRegisterScreen = () => {
    navigation.dispatch(
      StackActions.replace('Register')
    );
  }

  useEffect(() => {
    if (route.params != undefined) {
      if (route.params.message !== undefined) {
        ToastAndroid.show(route.params.message || "", ToastAndroid.SHORT);
      }
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" animated={true} translucent={false} />

      <Text style={{ ...TEXT_FORMAT_STYLE.HEADING_1, marginBottom: 12 }}>
        Selamat datang di Aplikasi C3
      </Text>
      <Text style={{ ...TEXT_FORMAT_STYLE.PARAGRAPH, marginBottom: 12 }}>
        Aplikasi C3 membantu Anda menemukan informasi dan artikel terbaik untuk
        solusi mobil Anda.
      </Text>

      <ButtonGroupContainer>
        <Button
          type="primary"
          text="Login"
          onPress={goToLoginScreen}
        />

        <Button
          type="secondary"
          text="Register"
          onPress={goToRegisterScreen}
        />
      </ButtonGroupContainer>

      <View style={{ marginTop: 48 }}>
        <ABCConsultingCompanyLogo color={"#000"} />
        <Text style={{ ...TEXT_FORMAT_STYLE.PARAGRAPH, marginTop: 6 }}>
          ABC Consulting &#169; 2023
        </Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 12,
  },
});
