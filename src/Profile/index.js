import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Profile extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerAllInfo}>
                    <View style={styles.containerImage}>
                        <Image style={styles.imageProfile} source={{ uri: "https://media.istockphoto.com/photos/profile-view-of-serious-young-man-over-white-background-picture-id534880122" }} />
                    </View>
                    <View style={styles.containerInfo}>
                        <View style={styles.rowOne}>
                            <View style={{alignItems:"center"}}>
                                <Text style={styles.textInfo}>142</Text>
                                <Text style={styles.textLabel}>Posts</Text>
                            </View>

                            <View style={{alignItems:"center"}}>
                                <Text style={styles.textInfo}>7.4M</Text>
                                <Text style={styles.textLabel}>Followers</Text>
                            </View>

                            <View style={{alignItems:"center"}}>
                                <Text style={styles.textInfo}>117</Text>
                                <Text style={styles.textLabel}>Following</Text>
                            </View>
                        </View>

                        <View style={styles.rowTwo}>
                            <TouchableHighlight style={styles.buttonMessage}>
                                <Text>Message</Text>
                            </TouchableHighlight>

                            <TouchableHighlight style={styles.buttonSeguir}>
                                <Icon name="user-plus" size={20} color="white"/>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
}

const screen = Dimensions.get("screen")
const widthScreen = screen.width
const heightScreen = screen.height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(25, 26, 29, 1)",
    },

    row: {
        flexDirection: "row",
        padding: 5,
    },

    containerAllInfo: {
        height: 150,
        width: widthScreen,
        flexDirection: "row",
        // backgroundColor: "blue",
        justifyContent:"center",
        alignItems:"center"
    },

    containerImage: {
        flex: 1,
    },

    containerInfo: {
        flex: 2,
    },

    imageProfile: {
        width: 90, 
        height: 90, 
        borderRadius: 50,
        margin:10,
    },

    rowOne:{
        flexDirection:"row",
        paddingVertical:5,
        paddingHorizontal:10,
        justifyContent:"space-between",
        // backgroundColor:"red"
    },

    rowTwo: {
        flexDirection:"row",
        paddingVertical:5,
        paddingHorizontal:10,
        justifyContent:"space-around",
    },

    buttonMessage: {
        flex:2,
        backgroundColor:"#5458F7",
        alignItems:"center",
        justifyContent:"center",
        height:30,
        borderRadius:50,
        marginHorizontal:5,
        marginVertical:5,
    },

    buttonSeguir: {
        flex:1,
        backgroundColor: "rgba(25, 26, 29, 0.2)",
        alignItems:"center",
        justifyContent:"center",
        height:30,
        borderRadius:50,
        marginHorizontal:5,
        marginVertical:5,
    },

    textInfo:{
        fontSize:18,
        fontWeight:"bold",
        color:"white"
    },
    
    textLabel: {
        color:"rgba(85, 96, 85, 1)",
        fontSize:15
    }

})