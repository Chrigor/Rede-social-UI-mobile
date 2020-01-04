import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'


export default class Localization extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Localization</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "rgba(25, 26, 29, 0.95)",
    },
})