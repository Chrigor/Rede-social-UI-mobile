import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Alert,
  Modal,
  Text,
} from 'react-native';

export default class PhotoGrid extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const {foto} = this.props;
    const {id} = this.props;
    console.log('Foto: ');
    console.log(foto);

    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.setModalVisible(true)}>
          <Image source={foto} style={styles.image}/>
        </TouchableHighlight>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false)
          }}>
          <View style={{height, width}}>
            <Image source={foto} style={{flex:1}}/>
          </View>
        </Modal>
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
  },

  image: {
    height: 140,
    width: width / 3,
  },
});
