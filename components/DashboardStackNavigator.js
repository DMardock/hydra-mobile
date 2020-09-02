import {createStackNavigator} from 'react-navigation-stack';
import {DashboardTabNavigator} from './DashboardTabNavigator';
import LinearGradient from 'react-native-linear-gradient';
import LogoTitle from './LogoTitle';
import {View, Button} from 'react-native';
import {Icon} from 'react-native-elements';
import React, {Component} from 'react';
import {faBars, faWarehouse} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerBackground: (
          <LinearGradient
            colors={['#71b17d', '#6197c4']}
            style={{flex: 1}}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
          />
        ),
        headerTitle: <LogoTitle />,
        headerLeft: (
            <FontAwesomeIcon
                icon={faBars}
                style={{color: 'white', marginLeft: 16}}
                size={18}
            />
        ),
      };
    },
  },
);
