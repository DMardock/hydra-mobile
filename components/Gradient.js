import React, {Component} from 'react';
import {Defs, LinearGradient, Stop} from 'react-native-svg';

export default class Gradient extends React.Component {
    render() {
        return (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
                    <Stop offset={'0%'} stopColor={'rgb(113, 177, 125)'}/>
                    <Stop offset={'100%'} stopColor={'rgb(97, 151, 196)'}/>
                </LinearGradient>
            </Defs>
        );
    }
}
