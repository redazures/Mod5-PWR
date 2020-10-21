import React,{useState} from "react";
import { StyleSheet, View, Image, TouchableHighlight,Text} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {MaterialCommunityIcons} from '@expo/vector-icons'

import BodyText from "./BodyText";
import colors from "../config/colors";
import * as Yup from "yup";
import { AppForm as Form, AppFormField as FormField, AppFormPicker as Picker, SubmitButton } from "../components/forms";
import DisplayImages from '../components/DisplayImages'

const validationSchema = Yup.object().shape({
  description: Yup.string().required().min(1).label("Description"),
});

export default function ListItems({ title, subTitle, id, edited, imageUris, renderRightActions, logo="chevron-right",color, editLedgerHandler }) {
  const [addChangeLedger,setAddChangeLedger] =useState(false)
  
  
  const showChangeLedger=()=>{ // console.log(addChangeLedger)
    setAddChangeLedger(!addChangeLedger)
  }

  const editSubmitHandler=({description},{resetForm})=>{// editLedgerHandler(description,id)
    // console.log(resetForm)
    editLedgerHandler(description,id)
    resetForm()
    setAddChangeLedger(false)
  }

  // console.log(edited)
  return (
    <>
      {addChangeLedger ? 
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={showChangeLedger}>
        <View style={styles.container}>
            <View style={styles.detailsContainer}>
              <BodyText style={styles.title} numberOfLines={1}>{title}</BodyText>
                    <Form
                        initialValues={{description:subTitle}}
                        onSubmit={editSubmitHandler}
                        validationSchema={validationSchema}
                    >
                        <View style={styles.container}>
                        <FormField
                            maxLength={255}
                            multiline
                            name="description"
                            numberOfLines={3}
                            placeholder="Description"
                            width="90%"
                        />
                        <View width='9%' paddingLeft={5}>
                          <SubmitButton title="S"/>
                        </View>
                      </View>
                    </Form>
              </View>
        </View>
      </TouchableHighlight>
                        :
        <Swipeable renderRightActions={renderRightActions} >
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={showChangeLedger}>
                <View style={styles.container}>
                    <View style={styles.detailsContainer}>
                      <BodyText style={styles.title} numberOfLines={1}>{title}</BodyText>
                       <BodyText style={styles.subTitle} >{edited ? subTitle+" *EDITED*":subTitle}</BodyText>
                       <DisplayImages 
                          imageUris={imageUris}
                          // onAddImage={handleAdd}
                        />
                    </View>
                    <MaterialCommunityIcons 
                      color={color}
                      name={logo}
                      size={25}/>
                </View>
            </TouchableHighlight>
        </Swipeable>
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    flexDirection: "row",
    padding: 10,
    backgroundColor:colors.secondary,
    borderRadius:15
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
