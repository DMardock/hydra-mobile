import React, {Component} from 'react';
import {FlatList, Platform, ScrollView, Text, View} from 'react-native';
import LineChartWrapper from './LineChartWrapper';
import SingleTowerInfo from './SingleTowerInfo';

export default class TowerInfoSections extends Component {

    componentDidMount(): void {

    }

    render() {
        return (
            <View>
                <FlatList data={this.props.towerInfos} renderItem={({item}) => <SingleTowerInfo tower={item} />} />
            </View>
        )
    }
}
