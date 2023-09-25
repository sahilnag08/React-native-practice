import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flatcards() {
    return (
        <View style = {{flex: 1}}>
            <Text style={styles.headingText} >Flatcards</Text>
            <View style={styles.container}>
                <View style={[styles.box, styles.cardOne]} />
                <View style={[styles.box, styles.cardTwo]} />
                <View style={[styles.box, styles.cardThree]} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    box: {
        width: 100,
        height: 100,
        margin: 8
    },
    cardOne: {
        backgroundColor: 'red'
    },
    cardTwo: {
        backgroundColor: 'blue'
    },
    cardThree: {
        backgroundColor: 'green'
    },
})