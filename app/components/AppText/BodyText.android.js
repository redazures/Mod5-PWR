import React from "react";
import { StyleSheet, Text} from "react-native";

const BodyText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "600",
    fontSize: 12,
    fontFamily: "Roboto",
  },
});

export default BodyText;