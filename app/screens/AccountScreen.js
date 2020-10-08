import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Screen from '../components/Screen'
import ListItems from '../components/ListItems'

export default function AccountScreen() {
    return (
        <Screen>
            <ListItems
                title="Jimbo Chan"
                subTitle="Meko"
                image={require('../assets/doggie.png')}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({})
