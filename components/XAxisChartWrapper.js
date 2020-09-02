import React from 'react'
import {Text, View} from 'react-native';
import {BarChart, Grid, YAxis, XAxis} from 'react-native-svg-charts';
import Gradient from "../components/Gradient";
import {Card} from "react-native-elements";
import {iOSUIKit} from 'react-native-typography';
import * as scale from 'd3-scale'


class XAxisChartWrapper extends React.PureComponent {

    render() {
        const data = [
            {
                value: 3,
                label: 'Filtré',
            },
            {
                value: -2,
                label: 'Mélangé',
            }
        ];

        let xAxisWidth;
        const axesSvg = { fontSize: 10, fill: 'grey' };

        return (
            <Card>
                <Text style={{...iOSUIKit.subheadEmphasized, color: "#71b17d", }}>{this.props.title}</Text>
                <View style={{paddingVertical: 16, flexDirection: 'row'}}>
                    <YAxis
                        data={ data }
                        yAccessor={({ item }) => item.value}
                        contentInset={ { top: 20, bottom: 30 } }
                        svg={{
                            fill: 'grey',
                            fontSize: 10,
                        }}
                        numberOfTicks={ 10 }
                        formatLabel={ value => `${value}`}
                    />
                    <View onLayout={(event => xAxisWidth = event.nativeEvent.layout.width)} style={{flex : 1, marginLeft: 10}} >
                        <BarChart
                            yAccessor={({ item }) => item.value}
                            style={ { height: 200, flex: 1 } }
                            data={ data }
                            gridMin={0}
                            contentInset={ { top: 20, bottom: 20 } }
                            svg={ {
                                strokeWidth: 1,
                                fill: 'url(#gradient)',
                            } }
                        >
                            <Grid />
                            <Gradient/>
                        </BarChart>
                        <XAxis
                            svg={{
                                fill: 'grey',
                                fontSize: 10
                            }}
                            data={data}
                            scale={scale.scaleBand}
                            formatLabel={(value, index) => index}
                            svg={axesSvg}
                        />
                    </View>
                </View>
            </Card>

        )
    }
}

export default XAxisChartWrapper
