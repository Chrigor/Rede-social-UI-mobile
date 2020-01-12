import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Alert,
} from 'react-native';

export default class PhotoGrid extends Component {
  render() {
    const {foto} = this.props;
    const {id} = this.props;
    console.log('Foto: ');
    console.log(foto);

    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => Alert.alert(`Postagem ${id}`)}>
          <Image source={foto} style={styles.image} />
        </TouchableHighlight>
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
