import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from './Login'
import Home from './Home'


const config = {
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor:  "rgba(25, 26, 29, 1)",
        },
        headerTintColor: '#fff',
    },
}

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
                title: 'Clone gram?',
            }),
        }

    },

    config
);

const appContainer = createAppContainer(ModalNavigator);

export default appContainer;