import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

const AppText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontStyle: "italic",
    fontWeight: "600",
    color: "#8c7d70",
    textTransform: "capitalize",
    textAlign: "center",
    lineHeight: 30,
    paddingVertical:20,
    fontSize: 25,
    fontFamily: "Avenir",
  },
});

export default AppText;