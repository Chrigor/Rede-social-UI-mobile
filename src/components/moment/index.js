import React, { Component } from 'react';
import { StyleSheet, Image, Alert, TouchableHighlight } from 'react-native';

export default class Moment extends Component {
    state = {
        src: {},
        text:''
    }

    componentWillMount() {
        const { text, imagem} = this.props;
        this.setState({ src: imagem, text })
    }


    clickMoment = () => {
        Alert.alert(this.state.text)
    }

    render() {
        return (
            <TouchableHighlight onPress={this.clickMoment}>
                <Image source={this.state.src} style={styles.moments} />
            </TouchableHighlight>
        )
    }
}


const styles = StyleSheet.create({
    moments: {
        height: 55,
        width: 55,
        borderRadius: 50,
        margin: 5,
        borderColor: "white",
        borderWidth: 0.4,
    }
})
