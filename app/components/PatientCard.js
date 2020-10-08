import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
import BodyText from "./AppText/BodyText";
import ListItem from './ListItems'

export default function PatientCard({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image 
        source={image}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <BodyText style={styles.title}>{title}</BodyText>
        <BodyText style={styles.subTitle}>{subTitle}</BodyText>
      <View style={styles.userContainer}>
        <ListItem
          image={require('../assets/nurse.jpeg')}
          title="nurse"
          subTitle="comments"
        />
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor:colors.white,
    marginTop:35,
    marginBottom: 20,
    overflow:'hidden',
  },
  detailsContainer:{
    padding:20,
    height:200,
  },
  image:{
      width:"100%",
      height:200,
      borderRadius:35,
      marginRight:10
  },
  subTitle:{
    color:colors.secondary,
    fontWeight:'bold',
    fontSize:24,
    marginVertical:10
  },
  title:{
    marginBottom:7,
    fontSize:24,
    fontWeight:'500'
  },
  userContainer:{
    marginVertical:10
  },
});
