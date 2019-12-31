import React, { Component } from 'react';
import {Image, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';


class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <Image style={styles.logo} source={require("../../assets/logo.png")} />
                <TextInput style={styles.input} placeholder="Digite seu Login ..."/>
                <TextInput style={styles.input} placeholder="Digite sua Senha ..." secureTextEntry={true}/>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems:"center",
        backgroundColor:"rgba(25, 26, 29, 0.93)",
    },

    logo: {
        height:150,
        width:210,
    },

    input: {
        height:50,
        width:320,
        padding:10,
        borderRadius: 10,
        marginBottom:15,
        borderBottomColor: "#fff",
        borderBottomWidth: 2,
    }
})

export default Login;