import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../config/colors";
import BodyText from "./BodyText";

export default function PatientCard({ title, subTitle, imageUrl, onPress}) {


  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
          {imageUrl ? <Image source={{uri:imageUrl}} style={styles.image}/> : <Image source={require("../assets/healthcare.png")} style={styles.image}/>}
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
    flexDirection:"row",
    flex:.5,
  },
  detailsContainer:{
    padding:20,
  },
  image:{
      width:"25%",
      height:100,
  },
  subTitle:{
    color:colors.dark,
  },
  title:{
    marginBottom:7,
    color:colors.secondary,
    fontWeight:'bold',
  },
});
