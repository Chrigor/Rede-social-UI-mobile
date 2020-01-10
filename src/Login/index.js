import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Text,
  View,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const userLogado = {
  name: 'Chrigor Eduardo', 
  description: 'Os Desenvolvedores(as) Web são especialistas na construção de sites, sistemas ou aplicativos para web, tanto no Front como Back-end. » Infográfico: seu projeto precisa de um(a) Web Designer ou um(a) Desenvolvedor', 
  foto: { uri: 'https://media.istockphoto.com/photos/profile-view-of-serious-young-man-over-white-background-picture-id534880122' }, 
  profissao: "Programmer/Enginner",
  info: { 
    followers: "7.4M", 
    following: "2.1K", 
    post: "120",
  }
}

class Login extends Component {
  state = {
    login: '',
    password: '',
  };

  clickLogin = () => {
    this.navigateToHome();
  };

  changeLogin = text => {
    this.setState({ login: text });
  };

  changePassword = text => {
    this.setState({ password: text });
  };


  navigateToHome = () => {
    const { navigation } = this.props;
    const { login, password } = this.state;

    if (login == 'Chrigor' && password == '123') {
      navigation.navigate('RotasHome', { user: userLogado});
    } else {
      Alert.alert("Erro de usuário e senha")
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.containerLogin}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
          <View style={styles.containerInput}>
            <Icon name="user" color="#5458F7" size={25} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Digite seu Login ..."
              placeholderTextColor="#fff"
              onChangeText={this.changeLogin}
            />
          </View>
          <View style={styles.containerInput}>
            <Icon name="chain" color="#5458F7" size={25} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Digite sua Senha ..."
              secureTextEntry={true}
              placeholderTextColor="#fff"
              onChangeText={this.changePassword}
            />
          </View>
          <TouchableHighlight
            style={styles.buttonLogin}
            onPress={this.clickLogin}>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'rgba(25, 26, 29, 0.95)',
  },

  containerLogin: {
    margin: 20,
    alignItems: 'center',
    padding: 24,
    justifyContent: 'flex-end',
  },

  logo: {
    height: 150,
    width: 210,
  },

  input: {
    height: 50,
    width: 300,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 2,
    borderRadius: 10,
    marginBottom: 15,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    color: '#fff',
  },

  buttonLogin: {
    width: 340,
    height: 50,
    backgroundColor: '#5458F7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 30,
  },

  textLogin: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },

  icon: {
    margin: 10,
  },
});

export default Login;
