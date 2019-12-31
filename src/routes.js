import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from './Login'

const ModalNavigator = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: () => ({     
                headerShown: false, // Retira a status bar
            }),
        },
    },
);

const appContainer = createAppContainer(ModalNavigator);

export default appContainer;