import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from './Login';
import RotasHome from './Home/start';

const config = {
  headerLayoutPreset: 'center',
  headerBackTitleVisible: false,
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'rgba(25, 26, 29, 1)',
    },
    headerTintColor: '#fff',
  },
};

const ModalNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: () => ({
        headerShown: false, // Retira a status bar
      }),
    },

    RotasHome: {
      screen: RotasHome,
      navigationOptions: () => ({
        title: 'Clone gram?',
        headerShown: false, // Retira a status bar
      }),
    },
  },

  config,
);

const appContainer = createAppContainer(ModalNavigator);

export default appContainer;
