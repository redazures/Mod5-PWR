import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";

const Patients = () => {
  return (
    <View style={styles.card}>
      <Card
        title="Red Jacket for Sale"
        subTitle="100"
        image={require("../assets/doggie.png")}
      />
    </View>
  );
};

export default Patients;

const styles = StyleSheet.create({
  Card: {
    backgroundColor: "#fbf4f4",
    padding: 20,
    paddingTop: 100,
  },
});
