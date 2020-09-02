import {Image} from 'react-native-elements';
import React, {Component} from 'react';

export default class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../hydra_logo_white.png')}
        style={{width: 100, height: 50}}
      />
    );
  }
}
