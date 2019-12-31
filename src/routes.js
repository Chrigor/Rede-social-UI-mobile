import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from './Login'
import Home from './Home'

const ModalNavigator = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: () => ({
                headerShown: false, // Retira a status bar
            }),
        },

        Home: {
            screen: Home,
            navigationOptions: () => ({
               title: 'Home page'
            }),
        }

    },
);

const appContainer = createAppContainer(ModalNavigator);

export default appContainer;