import React, {Component} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

export default class PhotoGrid extends Component {
  render() {
    const {foto} = this.props;

    console.log('Foto: ');
    console.log(foto);

    return (
      <View style={styles.container}>
        <Image source={foto} style={styles.image} />
      </View>
    );
  }
}

const screenDimensions = Dimensions.get('screen');
const width = screenDimensions.width;
const height = screenDimensions.height;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexBasis: 0,
    padding: 2,
    backgroundColor: 'blue',
  },

  image: {
    height: 140,
    width: width / 3,
  },
});
