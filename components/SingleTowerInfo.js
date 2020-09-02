import React, {Component} from 'react';
import {Text, View} from 'react-native';
import LineChartWrapper from './LineChartWrapper';
import {iOSUIKit} from 'react-native-typography';
import ThickLine from './ThickLine';
import TowerLiveInfos from './TowerLiveInfos';
import {faTemperatureLow, faTint, faShower} from '@fortawesome/free-solid-svg-icons';

export default class SingleTowerInfo extends Component {

    render() {
        return (
            <View>
                <Text style={{...iOSUIKit.largeTitleEmphasized, paddingLeft: 16, paddingTop: 16, color: '#71b17d', fontSize: 24}}>{this.props.tower.towerName}</Text>
                <ThickLine />
                <TowerLiveInfos towerInfos={[{title: "Humidité", icon: faTint, value: this.props.tower.currentHumidity}, {title: "Température", icon: faTemperatureLow, value: this.props.tower.currentTemperature}]}/>
                <LineChartWrapper data={this.props.tower.temperatureGraph.data} title={this.props.tower.temperatureGraph.title} format={this.props.tower.temperatureGraph.format} />
                <LineChartWrapper data={this.props.tower.humidityGraph.data} title={this.props.tower.humidityGraph.title} format={this.props.tower.humidityGraph.format} />
            </View>
        );
    }
}
