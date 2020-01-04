import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class extends Component {

    state = {
        color: "white",
        quantidade: 0,
        tipoButton: "heart",
        isClicked: false
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {

        const { color, quantidade, tipoButton } = this.props;

        this.setState({ color, quantidade, tipoButton });
    }


    click = () => {

        const { color } = this.state;
        let { quantidade } = this.state;

        if (color == "white") {
            this.setState({ color: "#5458F7", quantidade: ++quantidade, isClicked: false });
        } else {
            this.setState({ color: "white", quantidade: --quantidade, isClicked: true });
        }

    }


    render() {
        return (
            <View style={styles.containerButtons}>
                <TouchableHighlight style={styles.button} onPress={this.click}>
                    <Icon name={this.state.tipoButton} color={this.state.color} size={20}/>
                </TouchableHighlight>
                <Text style={styles.textIndicator}>{this.state.quantidade}</Text>
            </View>
        )
    }

}


const styles = StyleSheet.create({

    containerButtons: {
        flexDirection: "row",
        marginRight: 30,
        width: 50,
        justifyContent: "center",
        alignItems: "center"
    },

    button: {
        height: 35,
        width: 35,
        borderRadius: 35,
        backgroundColor: "rgba(25, 26, 29, 0.8)",
        justifyContent: "center",
        alignItems: "center"
    },

    textIndicator: {
        fontSize: 12,
        color: "#fff",
        margin: 2
    },
})