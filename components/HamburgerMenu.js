import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import React, {Component} from 'react';

export default class HamburgerMenu extends React.Component {
  render() {
    return (
      <View style={{paddingLeft: 10}}>
        <Icon color="#fff" name="menu" />
      </View>
    );
  }
}
