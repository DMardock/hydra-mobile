import {ActivityIndicator, Dimensions, FlatList, StatusBar, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {iOSUIKit} from 'react-native-typography';
import React from 'react';
import LinearGradient from "react-native-linear-gradient";

export default class RecapSection extends React.Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    componentDidMount(){
        return fetch(this.props.uri)
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    //dataSource: this.mapServerDataToRecapSection(responseJson),
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }

    mapServerDataToRecapSection(responseJson) {
        return responseJson.map((information, index) => (
            <View key={information.id} style={{flexDirection: "column", flex: 1, justifyContent: "space-around", alignItems: "center"}}>
                <FontAwesomeIcon
                    icon={this.props.icons[index]}
                    style={{color: "white", marginBottom : 8}}
                    size={18}
                />
                <Text style={{...iOSUIKit.bodyEmphasizedWhite, marginBottom: 8}}>{information.value}</Text>
                <Text style={iOSUIKit.caption2EmphasizedWhite}>{information.title}</Text>
            </View>
        ));
    }

    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return(
            <View style={{
                width: Dimensions.get('window').width,
                height: 80,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 9,
                },
                shadowOpacity: 0.2,
                shadowRadius: 4.65,
                elevation: 4,
            }}>
                <LinearGradient
                    end={{x: 1, y: 0.5}}
                    start={{x: 0, y: 0.5}}
                    colors={['#71b17d', '#6197c4']}
                    style={{
                        padding: 15 ,
                        width: Dimensions.get('window').width,
                        height: 80,
                    }}>

                    <View style={{flex: 1, flexDirection: "row", justifyContent: "space-around"}}>
                        <View key={0} style={{flexDirection: "column", flex: 1, justifyContent: "space-around", alignItems: "center"}}>
                            <FontAwesomeIcon
                                icon={this.props.icons[0]}
                                style={{color: "white", marginBottom : 8}}
                                size={18}
                            />
                            <Text style={{...iOSUIKit.bodyEmphasizedWhite, marginBottom: 8}}>{"Une valeur"}</Text>
                            <Text style={iOSUIKit.caption2EmphasizedWhite}>{"Information"}</Text>
                        </View>

                        <View key={1} style={{flexDirection: "column", flex: 1, justifyContent: "space-around", alignItems: "center"}}>
                            <FontAwesomeIcon
                                icon={this.props.icons[1]}
                                style={{color: "white", marginBottom : 8}}
                                size={18}
                            />
                            <Text style={{...iOSUIKit.bodyEmphasizedWhite, marginBottom: 8}}>{"Une valeur"}</Text>
                            <Text style={iOSUIKit.caption2EmphasizedWhite}>{"Information"}</Text>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}

/*

export const RecapSection = ({initialArray}) => {
    var summaryInformations = initialArray.map(information => (
        <View key={information.id} style={{flexDirection: "column", flex: 1, justifyContent: "space-around", alignItems: "center"}}>
            <StatusBar barStyle="light-content" />
            <FontAwesomeIcon
                icon={information.iconName}
                style={{color: "white", marginBottom : 8}}
                size={18}
            />
            <Text style={{...iOSUIKit.bodyEmphasizedWhite, marginBottom: 8}}>{information.value}</Text>
            <Text style={iOSUIKit.caption2EmphasizedWhite}>{information.title}</Text>
        </View>
    ));

    return (
        <View style={{
            width: Dimensions.get('window').width,
            height: 80,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 9,
            },
            shadowOpacity: 0.2,
            shadowRadius: 4.65,
            elevation: 4,
        }}>
            <LinearGradient
                end={{x: 1, y: 0.5}}
                start={{x: 0, y: 0.5}}
                colors={['#71b17d', '#6197c4']}
                style={{
                    padding: 15 ,
                    width: Dimensions.get('window').width,
                    height: 80,
                }}>
                <View style={{flex: 1, flexDirection: "row", justifyContent: "space-around"}}>
                    {summaryInformations}
                </View>
            </LinearGradient>
        </View>
    );

};
*/

