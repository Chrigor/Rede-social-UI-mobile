import React, { Component } from 'react';
import { Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class Home extends Component {


    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>Home page</Text>
            </ScrollView>
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
});

export default Home;