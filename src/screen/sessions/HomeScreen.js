import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { StackActions } from "@react-navigation/native";

import Button from "../../components/Button";

const HomeScreen = ({ navigation }) => {
  const logout = () => {
    navigation.dispatch(StackActions.replace("Welcome", {
        message: "Anda berhasil logout."
    }));
  };
  return (
    <View>
      <Text>ini beranda</Text>

      <Button type="primary" onPress={logout} text={"Logout"} />

      <StatusBar translucent={false} style="auto" animated={true} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
