import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import BodyText from "./AppText/BodyText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function ListItems({ title, subTitle, image, ImageComponent,onPress, renderRightActions }) {
  return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={styles.container}>
                    {ImageComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                    <BodyText style={styles.title}>{title}</BodyText>
                    {subTitle && <BodyText style={styles.subTitle}>{subTitle}</BodyText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  detailsContainer: {
    marginLeft:10,
    justifyContent:'center'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "700",
    color: colors.black,
  },
});
