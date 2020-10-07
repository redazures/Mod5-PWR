import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText/AppText.android";

export default function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image 
        source={image}
        style={styles.image}
      />
    <AppText>{title}</AppText>
    <AppText>{subTitle}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor:colors.white,
    marginTop:35,
    marginBottom: 20,
  },
  image:{
      width:"100%",
      height:200,
  }
});
