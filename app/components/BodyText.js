import React from "react";
import { StyleSheet, Text} from "react-native";

import defaultStyles from '../config/styles'
const BodyText = ({ children,style }) => {
  return <Text style={[defaultStyles.text,style]}>{children}</Text>;
};

export default BodyText;