import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './index';
import Camera from '../Camera/';
import Search from '../Search';
import Profile from '../Profile';

const config = {
  tabBarOptions: {
    activeTintColor: '#5458F7',
    style: {
      backgroundColor: 'rgba(25, 26, 29, 1)',
    },
  },
};

const Routes = createAppContainer(

  createBottomTabNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: () => ({
          title: 'Home',
          tabBarIcon: ({tintColor}) => (
            <Icon name="home" color={tintColor} size={18} />
          ),
        }),
      },

      Search: {
        screen: Search,
        navigationOptions: () => ({
          title: 'Search',
          tabBarIcon: ({tintColor}) => (
            <Icon name="search" color={tintColor} size={18} />
          ),
        }),
      },

      Camera: {
        screen: Camera,
        navigationOptions: () => ({
          title: 'Camera',
          tabBarIcon: ({tintColor}) => (
            <Icon name="camera" color={tintColor} size={18} />
          ),
        }),
      },
      
      Profile: {
        screen: Profile,
        navigationOptions: () => ({
          title: 'Profile',
          tabBarIcon: ({tintColor}) => (
            <Icon name="user" color={tintColor} size={18} />
          ),
        }),
      },
    },
    config,
  ),
);

export default Routes;
