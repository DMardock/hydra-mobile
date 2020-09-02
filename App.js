import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {DashboardStackNavigator} from './components/DashboardStackNavigator';
import ConfigurationScreen from './screens/ConfigurationScreen';
import LinearGradient from "react-native-linear-gradient";
import LogoTitle from './components/LogoTitle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const AppDrawerNavigator = createDrawerNavigator({
  "Panneau de bord": {
    screen: DashboardStackNavigator,
  },

  "Configurations": {
    screen: ConfigurationScreen,
  }
}, {
  contentOptions: {
    activeTintColor: "#e91e63",
  },
});

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default createAppContainer(AppDrawerNavigator);
