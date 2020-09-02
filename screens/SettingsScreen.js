import React from 'react';
import {View, Text} from 'react-native';
import HomeHeader from '../HomeHeader';

const SettingsScreen = props => {
  return (
    <View>
      <HomeHeader navigation={props.navigation} />
      <Text>This is Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;
