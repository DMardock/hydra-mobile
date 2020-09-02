import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import Orientation from 'react-native-orientation-locker';
import { withNavigation } from 'react-navigation';

export default class MapScreen extends Component {

    _onOrientationDidChange = (orientation) => {
        if (orientation == 'PORTRAIT') {
            Orientation.lockToLandscapeLeft();
        }
    };

    componentDidMount() {
        Orientation.removeAllListeners();
        Orientation.unlockAllOrientations();
        Orientation.lockToLandscapeLeft();
        Orientation.addOrientationListener(this._onOrientationDidChange);
    }

    componentWillUnmount() {
        Orientation.unlockAllOrientations();
        Orientation.removeOrientationListener(this._onOrientationDidChange);
    }

    render() {
        return (
            <View>
                <SvgUri
                    width="100%"
                    height="100%"
                    uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
                />
            </View>
        )
    }
}
