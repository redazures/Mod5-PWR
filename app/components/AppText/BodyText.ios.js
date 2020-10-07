import React from "react";
import { StyleSheet, Text} from "react-native";

const BodyText = ({ children,style }) => {
  return <Text style={[styles.text,style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Avenir",
  },
});

export default BodyText;