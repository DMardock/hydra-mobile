import React from 'react'
import { ProgressCircle } from 'react-native-svg-charts'
import {Defs, LinearGradient, Stop} from 'react-native-svg';

class ProgressCircleWrapper extends React.PureComponent {

    render() {

        const Gradient = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
                    <Stop offset={'0%'} stopColor={'rgb(113, 177, 125)'}/>
                    <Stop offset={'100%'} stopColor={'rgb(97, 151, 196)'}/>
                </LinearGradient>
            </Defs>
        );

        return (
            <ProgressCircle
                style={ { height: 200 } }
                progress={ 0.7 }
                progressColor={'rgb(134, 65, 244)'}
                startAngle={ -Math.PI * this.props.pourcentage}
                endAngle={ Math.PI * this.props.pourcentage}
            >
                <Gradient/>
            </ProgressCircle>
        )
    }

}

export default ProgressCircleWrapper
