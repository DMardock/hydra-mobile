import React, {Component} from 'react';
import {FlatList, Picker, Platform, ScrollView, View} from 'react-native';
import {Header} from '../components/Header';
import {faTemperatureLow, faTint, faShower} from '@fortawesome/free-solid-svg-icons';
import RecapSection from '../components/RecapSection';
import GraphList from '../components/GraphList';
import Orientation from 'react-native-orientation-locker';
import TowerInfoSections from '../components/TowerInfoSections';

export default class PlantTowerScreen extends Component {

    constructor() {
        super();
        this.state = {
            language : null
        }
    }

    render() {
        return (
            <View>
                <ScrollView stickyHeaderIndices={Platform.OS === 'ios' ? [1] : undefined} showsVerticalScrollIndicator={false}>
                    <Header titleContent={'Vos Tours'} />
                    <RecapSection uri={'http://206.167.241.235/api/gui'} icons={icons} />
                    <TowerInfoSections towerInfos={towerInfos} />
                </ScrollView>
            </View>
        );
    }
};

const towerInfos = [
    {
        towerName : "Tour 1",
        humidityGraph : {title : "Humidité", format : "%", data : [25.6, 15.6, 25.4, 23.5, 18.6, 32.4, 8.64, 15.4]},
        temperatureGraph : {title : "Température", format : "ºC", data : [25.6, 15.6, 25.4, 23.5, 18.6, 32.4, 8.64, 15.4]},
        currentTemperature : "18.6 ºC",
        currentHumidity : "24%"
    },
    {
        towerName : "Tour 2",
        humidityGraph : {title : "Humidité", format : "%", data : [25.6, 15.6, 25.4, 23.5, 18.6, 32.4, 8.64, 15.4]},
        temperatureGraph : {title : "Température", format : "ºC", data : [25.6, 15.6, 25.4, 23.5, 18.6, 32.4, 8.64, 15.4]},
        currentTemperature : "18.6 ºC",
        currentHumidity : "24%"
    }
];

const icons = [
    faTemperatureLow,
    faTint,
    faShower
];

const data = [ {data : [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80], title: "Température", format : "ºC"},
    {data : [52, 46, 63, 64, 72, 55, 45, 40, 47, 76, 54], title: "Humidité", format: "%"}];

const informations = [
    {
        id: 1,
        iconName : faTemperatureLow,
        title: "Temp.",
        value: "25.7 °C"
    },
    {
        id: 2,
        iconName : faTint,
        title: "Humidité",
        value: "56.67 %"
    },
    {
        id: 3,
        iconName : faShower,
        title: "Diffusion",
        value: "17:55"
    },
];
