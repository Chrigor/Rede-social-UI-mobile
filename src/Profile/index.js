import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Profile extends Component {
  handleClickMessage = () => {
    Alert.alert('Click message');
  };

  handleClickFollow = () => {
    Alert.alert('Click follow');
  };

  render() {
    const userLogado = this.props.screenProps;
    console.log('Parametros Screen props no Profile:');
    console.log(userLogado.user.info.following);

    const name = userLogado.user.name;
    const description = userLogado.user.description;
    const foto = userLogado.user.foto;
    const followers = userLogado.user.info.followers;
    const following = userLogado.user.info.following;
    const post = userLogado.user.info.post;

    return (
      <View style={styles.container}>
        <View style={styles.containerAllInfo}>
          <View style={styles.containerImage}>
            <Image
              style={styles.imageProfile}
              source={foto}
            />
          </View>
          <View style={styles.containerInfo}>
            <View style={styles.rowOne}>
              <View style={{alignItems: 'center'}}>
              <Text style={styles.textInfo}>{post}</Text>
                <Text style={styles.textLabel}>Posts</Text>
              </View>

              <View style={{alignItems: 'center'}}>
                <Text style={styles.textInfo}>{followers}</Text>
                <Text style={styles.textLabel}>Followers</Text>
              </View>

              <View style={{alignItems: 'center'}}>
                <Text style={styles.textInfo}>{following}</Text>
                <Text style={styles.textLabel}>Following</Text>
              </View>
            </View>

            <View style={styles.rowTwo}>
              <TouchableHighlight
                style={styles.buttonMessage}
                onPress={this.handleClickMessage}>
                <Text style={styles.textButton}>Message</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.buttonSeguir}
                onPress={this.handleClickFollow}>
                <Icon name="user-plus" size={20} color="white" />
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.containerNameAndProf}>
            <Text style={styles.textInfo}>{name}</Text>
            <Text style={styles.textLabel}>Band/Musician</Text>
          </View>

          <View style={styles.containerDescriptionProfile}>
            <Text style={styles.textDescription}>{description}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const screen = Dimensions.get('screen');
const widthScreen = screen.width;
const heightScreen = screen.height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(25, 26, 29, 1)',
  },

  row: {
    flexDirection: 'row',
    padding: 5,
  },

  containerAllInfo: {
    height: 150,
    width: widthScreen,
    flexDirection: 'row',
    // backgroundColor: "blue",
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerImage: {
    flex: 1,
  },

  containerInfo: {
    flex: 2,
  },

  imageProfile: {
    width: 90,
    height: 90,
    borderRadius: 50,
    margin: 10,
  },

  rowOne: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    // backgroundColor:"red"
  },

  rowTwo: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },

  buttonMessage: {
    flex: 2,
    backgroundColor: '#5458F7',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    borderRadius: 50,
    marginHorizontal: 5,
    marginVertical: 5,
  },

  buttonSeguir: {
    flex: 1,
    backgroundColor: 'rgba(25, 26, 29, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    borderRadius: 50,
    marginHorizontal: 5,
    marginVertical: 5,
  },

  textInfo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },

  textLabel: {
    color: 'rgba(85, 96, 85, 1)',
    fontSize: 15,
  },

  textButton: {
    fontSize: 15,
    color: 'white',
  },

  containerNameAndProf: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginVertical: 2,
    marginHorizontal: 5,
  },

  containerDescriptionProfile: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginHorizontal: 5,
  },

  textDescription: {
    fontSize: 13,
    color: 'white',
    padding: 2,
  },
});
