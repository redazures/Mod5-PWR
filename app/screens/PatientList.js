import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function PatientList(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/doggie.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
});
