import React, {Component} from 'react';
import {View, ScrollView, FlatList, Platform, StatusBar} from 'react-native';
import {Header} from '../components/Header';
import {faTint, faTemperatureLow} from '@fortawesome/free-solid-svg-icons';
import RecapSection from '../components/RecapSection';
import GraphList from '../components/GraphList';
import Orientation from 'react-native-orientation-locker';
import TowerInfoSections from '../components/TowerInfoSections';

export default class GreenHouseScreen extends Component {
    render() {
        return (
            <View>
                <ScrollView stickyHeaderIndices={Platform.OS === 'ios' ? [1] : undefined} showsVerticalScrollIndicator={false}>
                    <StatusBar backgroundColor="blue" barStyle="light-content" />
                    <Header titleContent={'Votre Serre'} />
                    <RecapSection uri={'http://206.167.241.235/api/gui'} icons={icons} />
                    <GraphList uri={'http://206.167.241.235/api/towers/send'} />
                </ScrollView>
            </View>
        )
    }
}

const towerInfos = [
    {
        towerName : "Tour 1",
        humidityGraph : {title : "Humidité", format : "%", data : [25.6, 15.6, 25.4, 23.5, 18.6, 32.4, 8.64, 15.4]},
        temperatureGraph : {title : "Température", format : "ºC", data : [25.6, 15.6, 25.4, 23.5, 18.6, 32.4, 8.64, 15.4]},
        currentTemperature : "18.6 ºC",
        currentHumidity : "24%"
    }
];

const icons = [
    faTemperatureLow,
    faTint
];
