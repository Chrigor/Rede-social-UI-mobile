import React, { Component } from 'react';
import { Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';



const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'First Item',
        description: 'uahshuasduhasduhdsuha',
        date: '31/12/2019 at 14:32 PM',
        imagePost: require("../../assets/post.jpg"),
        imagePerfil: require("../../assets/user1.jpg"),
        likes: 15,
        comments: []
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Second Item',
        description: 'uahshuasduhasduhdsuha',
        date: '31/12/2019 at 14:32 PM',
        imagePost: require("../../assets/post1.jpg"),
        imagePerfil: require("../../assets/user2.jpg"),
        likes: 5,
        comments: []
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'Third Item',
        description: 'uahshuasduhasduhdsuha',
        date: '31/12/2019 at 14:32 PM',
        imagePost: require("../../assets/post3.jpg"),
        imagePerfil: require("../../assets/user3.jpg"),
        likes: 21,
        comments: []
    },
];


class Home extends Component {


    clickLike = () => {
        Alert.alert("like")
    }

    clickComment = () => {
        Alert.alert("comment")
    }

    renderPost = ({ item }) => {
        return (
            <View style={styles.containerPost}>
                <View style={styles.cabecalhoPublicacao}>
                    <Image source={item.imagePerfil} style={styles.imagePerfil} />
                    <View style={styles.conateinerNameDate}>
                        <Text style={styles.textName}>{item.name}</Text>
                        <Text style={styles.textDate}>{item.date}</Text>
                    </View>
                </View>
                <View>
                    <Image source={item.imagePost} style={styles.imagePost} />
                    <Text style={styles.descriptionPost}>{item.description}</Text>
                </View>

                <View style={styles.lineStyle} />

                <View style={styles.containerBottomPost}>
                    <View style={styles.containerGroupButtons}>
                        <View style={styles.containerButtons}>
                        <TouchableHighlight style={styles.button} onPress={this.clickLike}>
                                <Icon name="heart" color="white"/>
                            </TouchableHighlight>
                            <Text style={styles.textIndicator}>{item.likes}</Text>
                        </View>

                        <View style={styles.containerButtons}>
                            <TouchableHighlight style={styles.button} onPress={this.clickComment}>
                                <Icon name="comments" color="white"/>
                            </TouchableHighlight>
                            <Text style={styles.textIndicator}>{item.comments.length}</Text>
                        </View>
                    </View>
                    <Icon name="chain" size={25} color="white"/>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={this.renderPost}
                />
            </View>
        )
    }
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 5,
        backgroundColor: "rgba(25, 26, 29, 1)",
    },

    containerPost: {
        height: 385,
        width: 340,
        padding: 10,
        marginBottom: 35
    },

    imagePerfil: {
        height: 50,
        width: 50,
        borderRadius: 50
    },

    cabecalhoPublicacao: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: "rgba(25, 26, 29, 1)"
    },

    textName:{
        fontSize:15,
        color:"#fff",
        fontWeight:"bold"
    },  

    textDate: {
        fontSize:12,
        color:"rgba(120,120,120,0.9)",
        fontWeight:"bold"
    },

    textIndicator: {
        fontSize:12,
        color:"#fff",
        margin:2
    },  

    imagePost: {
        width: "100%",
        height: 250,
        alignSelf: "center"
    },


    descriptionPost: {
        fontSize: 15,
        marginLeft:5,
        marginTop: 10,
        fontSize:15,
        color:"#fff"
    },

    conateinerNameDate: {
        marginLeft: 10,
        marginTop: 5,
    },

    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10,
    },

    containerBottomPost: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    containerGroupButtons: {
        flexDirection: "row",
    },

    containerButtons: {
        flexDirection: "row",
        marginRight: 30,
        width: 50,
        justifyContent:"center",
        alignItems:"center"
    },

    button:{
        height:35,
        width:35,
        borderRadius:35,
        backgroundColor:"blue",
        justifyContent:"center",
        alignItems:"center"
    }

});

export default Home;