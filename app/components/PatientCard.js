import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../config/colors";
import BodyText from "./BodyText";

export default function PatientCard({ title, subTitle, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
          <Image source={image} style={styles.image}/>
        <View style={styles.detailsContainer}>
          <BodyText style={styles.title}>{title}</BodyText>
          <BodyText style={styles.subTitle}>{subTitle}</BodyText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor:colors.white,
    marginBottom: 20,
    overflow:'hidden',
  },
  detailsContainer:{
    padding:20,
  },
  image:{
      width:"100%",
      height:200,
  },
  subTitle:{
    color:colors.secondary,
    fontWeight:'bold',
  },
  title:{
    marginBottom:7,
  },
});
