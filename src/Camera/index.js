import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'


export default class Camera extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Camera</Text>
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