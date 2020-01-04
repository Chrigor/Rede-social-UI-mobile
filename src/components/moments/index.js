import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Alert, TouchableHighlight } from 'react-native';

import Moment from '../moment'

export default class Moments extends Component {


    state = {
        data: []
    }

    componentWillMount() {
        const { data } = this.props;
        this.setState({ data })
    }



    renderMoment = ({item}) => {
        return (
            <>
                <Moment src={item.imagemPerfil}/>
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
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "white",
        margin: 5
    },

    moments: {
        height: 55,
        width: 55,
        borderRadius: 50,
        margin: 5,
        borderColor: "white",
        borderWidth: 0.4,
    }
})