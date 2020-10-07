import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PatientCard from "../components/PatientCard";

const Patient = () => {
  return (
    <View style={styles.card}>
      <PatientCard
        title="Red Jacket for Sale"
        subTitle="100"
        image={require("../assets/doggie.png")}
      />
    </View>
  );
};

export default Patient;

const styles = StyleSheet.create({
  Card: {
    backgroundColor: "#fbf4f4",
    padding: 20,
    paddingTop: 100,
  },
});
