import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'

export default class Moments extends Component {


    state = {
        data: []
    }

    componentWillMount() {
        const { data } = this.props;
        this.setState({ data })
    }


    renderMoment = ({ item }) => {
        return (
            <>
                <Image source={item.imagePerfil} style={styles.moments} />
            </>
        )
    }

    render() {

        const { data } = this.state;
        return (
            <View style={styles.container}>

                <FlatList
                    horizontal={true}
                    keyExtractor={item => item.id}
                    renderItem={this.renderMoment}
                    data={data}
                />

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        height: 70,
        backgroundColor: "red",
        flexDirection:"row",
        alignItems:"center",
    },

    moments: {
        height: 60,
        width: 60,
        borderRadius:50,
        margin:5,
        borderColor: "black"
    }
})