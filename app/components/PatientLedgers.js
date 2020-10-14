import React,{useState} from "react";
import { StyleSheet, View, Image, TouchableHighlight,} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {MaterialCommunityIcons} from '@expo/vector-icons'

import BodyText from "./BodyText";
import colors from "../config/colors";
import * as Yup from "yup";
import { AppForm as Form, AppFormField as FormField, AppFormPicker as Picker, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  description: Yup.string().required().min(1).label("Description"),
});

export default function ListItems({ title, subTitle, renderRightActions,renderLeftActions, logo="chevron-right",color, editLedgerHandler }) {
  const [addChangeLedger,setAddChangeLedger] =useState(false)
    
  const showChangeLedger=()=>{
    console.log(addChangeLedger)
    setAddChangeLedger(!addChangeLedger)
  }

  return (
        <Swipeable renderRightActions={renderRightActions} renderLeftActions={renderLeftActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={showChangeLedger}>
                <View style={styles.container}>
                    <View style={styles.detailsContainer}>
                      <BodyText style={styles.title} numberOfLines={1}>{title}</BodyText>
                      {addChangeLedger ? 
                        <Form
                            initialValues={{description:""}}
                            onSubmit={editLedgerHandler}
                            validationSchema={validationSchema}
                        >
                            <FormField
                                maxLength={255}
                                multiline
                                name="description"
                                numberOfLines={3}
                                placeholder="Description"
                            />
                            <SubmitButton title="Update Ledger" />
                        </Form>
                      :
                       <BodyText style={styles.subTitle} >{subTitle}</BodyText>
                       }
                    </View>
                    <MaterialCommunityIcons 
                      color={color}
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
    color: colors.black,
  },
  title: {
    fontWeight: "700",
    color: colors.black,
  },
});
