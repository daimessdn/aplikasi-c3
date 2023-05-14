import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const BUTTON_MAIN_STYLE = {
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontWeight: 700,
    borderRadius: 8,
}

const Button = ({ type, text, onPress }) => {
  const PRIMARY_STYLE = styles.buttonPrimary;
  const SECONDARY_STYLE = styles.buttonSecondary;

  return (
    <TouchableOpacity style={type === "primary" ? PRIMARY_STYLE : SECONDARY_STYLE} onPress={onPress}>
        <Text style={{ color: type === "primary" ? "#fff" : "#ffed66" }}>{ text }</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonPrimary: {
    ...BUTTON_MAIN_STYLE,
    backgroundColor: "#FFED66",
  },
  buttonSecondary: {
    ...BUTTON_MAIN_STYLE,
    backgroundColor: "#fff",
    borderColor: "#FFED66",
  },
});
