import React from "react";
import { StyleSheet, Text} from "react-native";

import defaultStyles from '../config/styles'
const BodyText = ({ children,style,...otherProps }) => {
  return <Text style={[defaultStyles.text,style]}{...otherProps}>{children}</Text>;
};

export default BodyText;