import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { TEXT_STYLES } from "../styles";

const BUTTON_MAIN_STYLE = {
  paddingVertical: 8,
  paddingHorizontal: 16,
  fontWeight: 700,
  borderRadius: 8,
  alignSelf: "flex-start",
  width: "auto",
};

const Button = ({ type, text, onPress }) => {
  const PRIMARY_STYLE = styles.buttonPrimary;
  const SECONDARY_STYLE = styles.buttonSecondary;

  return (
    <TouchableOpacity
      style={type === "primary" ? PRIMARY_STYLE : SECONDARY_STYLE }
      onPress={onPress}
    >
      <Text
        style={{
          color: type === "primary" ? "#333533" : "#333533",
          ...TEXT_STYLES.INTER_BOLD,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonPrimary: {
    ...BUTTON_MAIN_STYLE,
    backgroundColor: "#ffee32",
    borderColor: "#ffee32",
    borderWidth: 1
  },
  buttonSecondary: {
    ...BUTTON_MAIN_STYLE,
    backgroundColor: "#fff",
    borderColor: "#333533",
    borderWidth: 1
  },
});
