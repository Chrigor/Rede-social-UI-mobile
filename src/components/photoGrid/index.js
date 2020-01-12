import React, {Component} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

export default class PhotoGrid extends Component {
  render() {
    const {foto} = this.props;

    console.log('Foto: ');
    console.log(foto);

    return (
     
        <Image source={foto} style={styles.image} />

    );
  }
}

const screenDimensions = Dimensions.get('screen');
const width = screenDimensions.width;
const height = screenDimensions.height;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 140,
    width: width / 3,
    marginVertical: 5,
    padding: 10,
    backgroundColor: 'blue',
  },

  image: {
    height: 140,
    width: width / 3,
  },
});
