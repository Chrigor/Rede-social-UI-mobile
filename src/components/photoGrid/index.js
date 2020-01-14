/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
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

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ButtonInsta from '../../components/button';


export default class PhotoGrid extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { item, idUser } = this.props;

    var color = item.whoLike.indexOf(idUser) == -1 ? 'white' : '#5458F7';

    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.setModalVisible(true)}>
          <Image source={item.imagePost} style={styles.image} />
        </TouchableHighlight>

        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}>
          <View style={styles.containerModal}>
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

              <View style={styles.containerBottomPost}>
                <View style={styles.containerGroupButtons}>
                  <ButtonInsta
                    color={color}
                    quantidade={item.likes}
                    tipoButton="thumbs-up"
                  />
                  <ButtonInsta
                    color="white"
                    quantidade={item.comments.length}
                    tipoButton="comments"
                  />
                </View>
                <Icon name="chain" size={28} color="white" />
              </View>
            </View>
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

  containerModal: {
    width: width,
    height: height,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: 'rgba(25, 26, 29, 1)',
  },

  containerPost: {
    flex: 1,
    backgroundColor: "rgba(25, 26, 29, 0.95)",
  },

  imagePerfil: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },

  cabecalhoPublicacao: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal:15,
    backgroundColor: 'rgba(25, 26, 29, 1)',
  },

  textName: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },

  textDate: {
    fontSize: 12,
    color: 'rgba(120,120,120,0.9)',
    fontWeight: 'bold',
  },

  textIndicator: {
    fontSize: 12,
    color: '#fff',
    margin: 2,
  },

  imagePost: {
    width: '100%',
    height: 300,
    marginVertical: 8,
    alignSelf: 'center',
  },

  descriptionPost: {
    fontSize: 15,
    marginHorizontal: 5,
    marginVertical: 10,
    color: '#fff',
  },

  conateinerNameDate: {
    marginLeft: 10,
    marginTop: 5,
  },

  containerBottomPost: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical:8,
    paddingRight:5,
  },

  containerGroupButtons: {
    flexDirection: 'row',
    paddingVertical:2,
    paddingHorizontal:5,
    margin:5
  },

});
