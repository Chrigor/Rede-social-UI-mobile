import React, { Component } from 'react';
import { StyleSheet, Image, Alert, TouchableHighlight } from 'react-native';

export default class Moment extends Component {
    state = {
        src: ''
    }

    componentWillMount() {
        //const { src } = this.props;
        this.setState({ src: { uri: "http://s.glbimg.com/po/tt/f/original/2013/09/18/facebookperfil.jpg" } })
    }


    clickMoment = () => {
        Alert.alert("click")
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
