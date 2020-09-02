import React from 'react'
import {Circle} from 'react-native-svg';
import {LineChart, Grid, YAxis, XAxis} from 'react-native-svg-charts';
import {StyleSheet, Text, View} from 'react-native';
import {iOSUIKit} from 'react-native-typography';
import {Card} from 'react-native-elements';
import Gradient from "../components/Gradient";

class LineChartWrapper extends React.PureComponent {

    render() {
        const Decorator = ({ x, y, data }) => {
            return data.map((value, index) => (
                <Circle
                    key={ index }
                    cx={ x(index) }
                    cy={ y(value) }
                    r={ 4 }
                    stroke={ 'rgb(97, 151, 196)' }
                    fill={ 'white' }
                />
            ))
        };

        const axesSvg = { fontSize: 10, fill: 'grey' };

        const contentInset = { top: 20, bottom: 20 };
        return (
            <Card containerStyle={styles.cardElevated}>
                <Text style={{...iOSUIKit.subheadEmphasized, color: "#71b17d", }}>{this.props.title}</Text>
                <View style={{ height: 200, flexDirection: 'row' }}>
                    <YAxis
                        data={ this.props.data }
                        contentInset={ contentInset }
                        svg={{
                            fill: 'grey',
                            fontSize: 10,
                        }}
                        numberOfTicks={ 10 }
                        formatLabel={ value => `${value}` + this.props.format }
                    />
                    <LineChart
                        style={{ flex: 1, marginLeft: 16 }}
                        data={ this.props.data }
                        svg={{ strokeWidth: 2,
                            stroke: 'url(#gradient)'}}
                        contentInset={ contentInset }>
                        <Grid/>
                        <Gradient/>
                        <Decorator/>
                    </LineChart>
                </View>
                <XAxis
                    style={{ marginHorizontal: -10, height: 30 }}
                    data={this.props.data}
                    formatLabel={(value, index) => index}
                    contentInset={{ left: 55, right: 10 }}
                    svg={axesSvg}
                />
            </Card>
        )
    }
}

let styles = StyleSheet.create({
    cardElevated: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

export default LineChartWrapper;
