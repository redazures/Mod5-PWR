import React from "react";
import { StyleSheet, View, Image, TouchableHighlight,} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {MaterialCommunityIcons} from '@expo/vector-icons'

import BodyText from "../BodyText";
import colors from "../../config/colors";


export default function ListItems({ title, subTitle, image, IconComponent,onPress, renderRightActions,renderLeftActions, logo="chevron-right" }) {
  return (
        <Swipeable renderRightActions={renderRightActions} renderLeftActions={renderLeftActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                      <BodyText style={styles.title} numberOfLines={1}>{title}</BodyText>
                      {subTitle && <BodyText style={styles.subTitle} >{subTitle}</BodyText>}
                    </View>
                    <MaterialCommunityIcons 
                      color={colors.medium}
                      name={logo}
                      size={25}/>
                </View>
            </TouchableHighlight>
        </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    flexDirection: "row",
    padding: 10,
    backgroundColor:colors.white
  },
  detailsContainer: {
    marginLeft:10,
    flex:1,
    justifyContent:'center',
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
