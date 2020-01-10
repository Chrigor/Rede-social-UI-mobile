import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Text,
  View,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ButtonInsta from '../components/button';
import Moment from '../components/moments';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Kelvin Klen',
    description: 'Imagine uma nova história para sua vida e acredite nela ',
    date: '31/12/2019 at 14:32 PM',
    imagePost: {
      uri:
        'https://files.incrivel.club/files/news/part_71/715010/7826310-image-crop-582x516-1544022435-728-1680c03dbb-1545057856.jpg',
    },
    imagePerfil: {
      uri:
        'https://da0nhnpjqymn2.cloudfront.net/teste-perfil-ead/images/homem-ilustra-home.png',
    },
    likes: 15,
    comments: [],
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Mc Zói de Gato',
    description: 'Ser feliz sem motivo é a mais autêntica forma de felicidade.',
    date: '31/12/2019 at 14:32 PM',
    imagePost: {
      uri:
        'https://images.vexels.com/media/users/3/147102/isolated/preview/082213cb0f9eabb7e6715f59ef7d322a---cone-do-perfil-do-instagram-by-vexels.png',
    },
    imagePerfil: {
      uri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxeKurgkvyww87wmjLgI7FiQumiWi6tKI1S82LSfUUEk0yMa8oQ&s',
    },
    likes: 5,
    comments: [],
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Roberto Carlos Jovem',
    description:
      'Não existe um caminho para a felicidade. A felicidade é o caminho.',
    date: '31/12/2019 at 14:32 PM',
    imagePost: {
      uri:
        'data:image/png;base64,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',
    },
    imagePerfil: {
      uri: 'http://s.glbimg.com/po/tt/f/original/2013/09/18/facebookperfil.jpg',
    },
    likes: 21,
    comments: [],
  },

  {
    id: '58694a0f-3da1----',
    name: 'Pedrin',
    description: 'Oi, eu sou Goku',
    date: '03/01/2020 at 13:32 PM',
    imagePost: {
      uri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUcTUBsXk6iScuq71HGCBVFPU8grr8AAgf1FmGxcTOpddlhdn_w&s',
    },
    imagePerfil: {
      uri:
        'https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2019/07/21/indice.jpg',
    },
    likes: 21,
    comments: [],
  },
];

const dataMoments = [
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    imagePerfil: {
      uri: 'http://s.glbimg.com/po/tt/f/original/2013/09/18/facebookperfil.jpg',
    },
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d3',
    imagePerfil: {
      uri:
        'http://www.historiadeboaviagem.com.br/wp-content/uploads/Perfil-sem-imagem.jpg',
    },
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e723',
    imagePerfil: {
      uri:
        'https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg',
    },
  },
  {
    id: '58694a0f-3da1-471f-bd96-145529d723',
    imagePerfil: {
      uri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyfr9aV2rHgKiDMBnLzxvv2moMmZt-Mf90ubdUpPgjyRitT9zqQ&s',
    },
  },
  {
    id: '58694a0f-3da1-471f-bd96-171e29d723',
    imagePerfil: {
      uri:
        'http://pm1.narvii.com/6860/e7f3fc65d8d89af1c74b78077d12de14f98e02b8r1-462-462v2_uhq.jpg',
    },
  },
  {
    id: '58694a0f-3da1-471f-bd45571e29d723',
    imagePerfil: {
      uri:
        'https://http2.mlstatic.com/foto-desenho-para-o-seu-perfil-das-redes-sociais-D_NQ_NP_614041-MLB27185740295_042018-O.jpg',
    },
  },
  {
    id: '58694a0f-3da1-471f96-145571e29d723',
    imagePerfil: {
      uri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zUqJU9Y-anL_6HNfhp0bqE2ho4cuQTyQZCpCSE4Z8MKcgDoZDg&s',
    },
  },
  {
    id: '58694a0f-3da1-4-bd96-145571e29d723',
    imagePerfil: {
      uri: 'http://s.glbimg.com/po/tt/f/original/2013/09/18/facebookperfil.jpg',
    },
  },
  {
    id: '58694a0f-3d71f-bd96-145571e29d723',
    imagePerfil: {
      uri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvVgmsrAXP6kp0cpi9-mtXE_RPoti_pEvksmIwftmfWLDlcRGJ&s',
    },
  },
  {
    id: '58694a1-471f-bd96-145571e29d723',
    imagePerfil: {
      uri:
        'http://4.bp.blogspot.com/-Z3wndBhDXoY/VbI71C9DVYI/AAAAAAAADsc/5BoFbl13LAk/s1600/boteco%2Bde%2Boa%2B%25281%2529.jpg',
    },
  },
];

class Home extends Component {
  clickLike = () => {
    Alert.alert('like');
  };

  clickComment = () => {
    Alert.alert('comment');
  };

  renderPost = ({item}) => {
    return (
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

        <View style={styles.lineStyle} />

        <View style={styles.containerBottomPost}>
          <View style={styles.containerGroupButtons}>
            <ButtonInsta
              color="white"
              quantidade={item.likes}
              tipoButton="thumbs-up"
            />
            <ButtonInsta
              color="white"
              quantidade={item.comments.length}
              tipoButton="comments"
            />
          </View>
          <Icon name="chain" size={25} color="white" />
        </View>
      </View>
    );
  };

  render() {
    const userLogado = this.props.screenProps;
    console.log('Parametros Screen props:');
    console.log(userLogado.user.name);

    return (
      <View style={styles.container}>

        <Moment data={dataMoments} />

        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={this.renderPost}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'rgba(25, 26, 29, 1)',
  },

  containerPost: {
    flex: 1,
    padding: 10,
    marginBottom: 5,
  },

  imagePerfil: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },

  cabecalhoPublicacao: {
    flexDirection: 'row',
    padding: 10,
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
    marginBottom:5,
    alignSelf: 'center',
  },

  descriptionPost: {
    fontSize: 15,
    marginLeft: 5,
    marginTop: 10,
    color: '#fff',
  },

  conateinerNameDate: {
    marginLeft: 10,
    marginTop: 5,
  },

  lineStyle: {
    borderWidth: 0.195,
    borderColor: 'rgba(255,255,255,1)',
    margin: 10,
  },

  containerBottomPost: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  containerGroupButtons: {
    flexDirection: 'row',
  },
});

export default Home;
