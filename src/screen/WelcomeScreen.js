import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import React from "react";

import { TEXT_FORMAT_STYLE } from "../styles";

import Button from "../components/Button";
import ButtonGroupContainer from "../components/containers/ButtonGroupContainer";
import ABCConsultingCompanyLogo from "../../assets/svg/ABCConsultingCompanyLogo";

const HomeScreen = ({ navigation }) => {
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
          onPress={() => navigation.navigate("Login")}
        />

        <Button
          type="secondary"
          text="Register"
          onPress={() => console.log("register disini")}
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

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 12,
  },
});
