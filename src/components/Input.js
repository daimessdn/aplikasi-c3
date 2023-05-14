import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { TEXT_FORMAT_STYLE, TEXT_STYLES } from "../styles";

const Input = ({ label, value, placeholder, onChangeText, secureTextEntry = false, keyboardType = "default" }) => {
  return (
    <View>
      <Text style={{ ...TEXT_FORMAT_STYLE.PARAGRAPH, marginBottom: 4 }}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#202020",
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginBottom: 12
  },
  inputText: {
    ...TEXT_STYLES.INTER_REGULAR,
  },
});
