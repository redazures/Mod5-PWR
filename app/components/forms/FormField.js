import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFormikContext } from 'formik'

import TextInput from '../TextInput'
import ErrorMessage from './ErrorMessage'

export default function AppFormField({ name, width, style, ...otherProps}) {
    const {setFieldTouched, setFieldValue, errors, touched, values} = useFormikContext();
    return (
        <React.Fragment>
            <TextInput
                onBlur={()=>setFieldTouched(name)}
                onChangeText={text=>setFieldValue(name,text)}
                value={values[name]}
                width={width}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({})
