import React, {Component} from 'react';
import {View} from 'react-native';

export default class ThickLine extends Component {
    render() {
        return (
            <View
                style={{
                    borderBottomColor: '#aaaaaa',
                    marginLeft: 18,
                    marginTop: 4,
                    borderBottomWidth: 2.5,
                    width : 40
                }}
            />
        )
    }
}
