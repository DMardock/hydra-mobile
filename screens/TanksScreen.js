import React from 'react';
import {FlatList, Platform, ScrollView, View} from 'react-native';
import {Header} from '../components/Header';
import {faVial, faTemperatureLow, faArrowsAltV, faTint} from '@fortawesome/free-solid-svg-icons';
import RecapSection from '../components/RecapSection';
import XAxisChartWrapper from '../components/XAxisChartWrapper';
import GraphList from '../components/GraphList';
import Orientation from 'react-native-orientation-locker';

const TanksScreen = props => {

    return (
      <View>
          <ScrollView stickyHeaderIndices={Platform.OS === 'ios' ? [1] : undefined} showsVerticalScrollIndicator={false}>
              <Header titleContent={'Vos Réservoirs'} />
              <RecapSection uri={'http://206.167.241.235/api/gui'} icons={icons} />
              <XAxisChartWrapper title={"Différence d'eau selon le seuil"} />
              <GraphList uri={'http://206.167.241.235/api/towers/send'} />
          </ScrollView>
      </View>
  );
};

const icons = [
    faTemperatureLow,
    faVial,
    faArrowsAltV
];

const data = [
    {data: [25.6, 15.6, 25.4, 23.5, 18.6, 32.4, 8.64, 15.4], title : "Température", format: "ºC"},
    {data: [6.2, 6.7, 6.5, 7.0, 7.3, 6.4, 6.3], title: "pH", format: ""}
];

const informations = [
    {
        id: 1,
        iconName : faTemperatureLow,
        title: "Temp.",
        value: "24.2 °C"
    },
    {
        id: 2,
        iconName : faVial,
        title: "pH",
        value: "6.3"
    },
    {
        id: 3,
        iconName : faArrowsAltV,
        title: "Niveau d'eau",
        value: "56%"
    },
];

export default TanksScreen;
