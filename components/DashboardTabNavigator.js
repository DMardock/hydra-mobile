import {createBottomTabNavigator} from 'react-navigation-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import GreenHouseScreen from '../screens/GreenHouseScreen';
import {
  faSeedling,
  faSitemap,
  faWarehouse,
  faWater,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import PlantTowerScreen from '../screens/PlantTowersScreen';
import TanksScreen from '../screens/TanksScreen';
import MapScreen from '../screens/MapScreen';

export const DashboardTabNavigator = createBottomTabNavigator({
  Serre: {
    screen: GreenHouseScreen,
    navigationOptions: {
      tabBarOptions: {activeTintColor: '#6197c4'},
      tabBarIcon: ({focused, tintColor}) => {
        return (
          <FontAwesomeIcon
            icon={faWarehouse}
            style={{color: tintColor}}
            size={18}
          />
        );
      },
    },
  },
  Tours: {
    screen: PlantTowerScreen,
    navigationOptions: {
      tabBarOptions: {activeTintColor: '#6197c4'},
      tabBarIcon: ({focused, tintColor}) => {
        return (
          <FontAwesomeIcon
            icon={faSeedling}
            style={{color: tintColor}}
            size={18}
          />
        );
      },
    },
  },
  Réservoirs: {
    screen: TanksScreen,
    navigationOptions: {
      tabBarOptions: {activeTintColor: '#6197c4'},
      tabBarIcon: ({focused, tintColor}) => {
        return (
          <FontAwesomeIcon
            icon={faWater}
            style={{color: tintColor}}
            size={18}
          />
        );
      },
    },
  },
  Map: {
    screen: MapScreen,
    navigationOptions: {
      tabBarOptions: {activeTintColor: '#6197c4'},
      headerShown: false,
      tabBarIcon: ({focused, tintColor}) => {
        return (
          <FontAwesomeIcon
            icon={faSitemap}
            style={{color: tintColor}}
            size={18}
          />
        );
      },
    },
  },
});
