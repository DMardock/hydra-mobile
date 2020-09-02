import React, {Component} from 'react';
import {Dimensions, StatusBar, Text, View} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {iOSUIKit} from 'react-native-typography';

export default class TowerLiveInfos extends Component {
    render () {
        return (
            <View style={{
                width: Dimensions.get('window').width,
                height: 80,
                marginTop: 16
            }}>
                {this.props.towerInfos.map((tower, index) => (
                    <View key={tower.id} style={{flexDirection: "row", flex: 1, alignSelf: "stretch", alignItems: "center", paddingLeft: 16}}>
                        <View style={{ flex: 0.1, alignSelf: 'stretch' }}>
                            <FontAwesomeIcon
                                icon={tower.icon}
                                style={{color: "#aaaaaa"}}
                                size={18}
                            />
                        </View>
                        <View style={{ flex: 0.4, alignSelf: 'stretch'}}>
                            <Text style={{...iOSUIKit.caption2Emphasized, color: "#707070"}}>{tower.title}</Text>
                        </View>
                        <View style={{ flex: 1, alignSelf: 'stretch' }}>
                            <Text style={{...iOSUIKit.bodyEmphasized, color: "#707070"}}>{tower.value}</Text>
                        </View>
                    </View>
                ))}
            </View>
        );
    }
}
