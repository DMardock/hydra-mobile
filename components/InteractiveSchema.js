import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import {SvgXml} from 'react-native-svg';

class InteractiveSchema extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SvgXml xml={this.props.markerRendering} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});

export default InteractiveSchema;
