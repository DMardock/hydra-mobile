import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    Picker,
    StyleSheet,
    Text,
    View,
    Switch,
    TouchableOpacity,
    Button, Alert, Platform, ScrollView
} from 'react-native';
import {iOSUIKit} from 'react-native-typography';
import LinearGradient from "react-native-linear-gradient";
import {Card} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';

export default class ConfigurationScreen extends React.Component {

    state = {
        tower1 : {active : true, wateringFrequency: null, wateringDuration: null},
        tower2 : {active : true, wateringFrequency: null, wateringDuration: null},
        tower3 : {active : true, wateringFrequency: null, wateringDuration: null},
    };

    constructor(){
        super();
        this.onTower1ValueChange = this.onTower1ValueChange.bind(this);
        this.onTower2ValueChange = this.onTower2ValueChange.bind(this);
        this.onTower3ValueChange = this.onTower3ValueChange.bind(this);
        this.sendConfigurationsToApi = this.sendConfigurationsToApi.bind(this);
    }

    componentDidMount(): void {

    }

    render() {
        return (
            <View style={{marginTop: 80, height : Dimensions.get('window').height}}>
                <LinearGradient
                    end={{x: 1, y: 0.5}}
                    start={{x: 0, y: 0.5}}
                    colors={['#71b17d', '#6197c4']}
                    style={{
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height,
                    }}>
                    <ScrollView>
                        <View style={{paddingBottom: 100}}>
                            <Text style={{...iOSUIKit.largeTitleEmphasizedWhite, marginLeft: 8}}>Configurations</Text>
                            <Text style={{...iOSUIKit.bodyEmphasizedWhite, marginLeft: 13, marginBottom: -10, marginTop: 16}}>Tour 1</Text>
                            <Card containerStyle={styles.cardElevated}>
                                <View style={styles.section}>
                                    <View style={{flexDirection: 'column', flex: 1}}>
                                        <Text style={iOSUIKit.subheadEmphasized}>Activée</Text>
                                    </View>
                                    <View style={{flexDirection: 'column'}}>
                                        <Switch
                                            onValueChange={this.onTower1ValueChange}
                                            value={this.state.tower1.active}/>
                                    </View>
                                </View>
                                <View style={styles.section}>
                                    <View style={{flexDirection: 'column', flex: 1}} >
                                        <Text style={iOSUIKit.subheadEmphasized}>Fréquence</Text>
                                    </View>
                                    <View style={{flexDirection: 'column'}} >
                                        <RNPickerSelect
                                            placeholder={{
                                                label: 'Choisir une fréquence',
                                                value: '',
                                            }}
                                            onValueChange={(value) => this.state.tower1.wateringFrequency = value}
                                            items={[
                                                { label: '1 minute', value: 60000 },
                                                { label: '2 minutes', value: 120000 },
                                                { label: '3 minutes', value: 180000 },
                                                { label: '4 minutes', value: 240000 },
                                                { label: '5 minutes', value: 300000 },
                                                { label: '6 minutes', value: 360000 },
                                                { label: '7 minutes', value: 420000 },
                                            ]}
                                        />
                                    </View>
                                </View>
                                <View style={styles.section}>
                                    <View style={{flexDirection: 'column', flex: 1}} >
                                        <Text style={iOSUIKit.subheadEmphasized}>Durée</Text>
                                    </View>
                                    <View style={{flexDirection: 'column'}} >
                                        <RNPickerSelect
                                            placeholder={{
                                                label: 'Choisir une durée',
                                                value: '',
                                            }}
                                            onValueChange={(value) => this.state.tower1.wateringDuration = value}
                                            items={[
                                                { label: '1 seconde', value: 1000 },
                                                { label: '2 secondes', value: 2000 },
                                                { label: '3 secondes', value: 3000 },
                                                { label: '4 secondes', value: 4000 },
                                                { label: '5 secondes', value: 5000 },
                                                { label: '6 secondes', value: 6000 },
                                                { label: '7 secondes', value: 7000 },
                                            ]}
                                        />
                                    </View>
                                </View>

                            </Card>
                            <Text style={{...iOSUIKit.bodyEmphasizedWhite, marginLeft: 13, marginBottom: -10, marginTop: 16}}>Tour 2</Text>
                            <Card containerStyle={styles.cardElevated}>
                                <View style={styles.section}>
                                    <View style={{flexDirection: 'column', flex: 1}}>
                                        <Text style={iOSUIKit.subheadEmphasized}>Activée</Text>
                                    </View>
                                    <View style={{flexDirection: 'column'}}>
                                        <Switch
                                            onValueChange={this.onTower2ValueChange}
                                            value={this.state.tower2.active}/>
                                    </View>
                                </View>
                                <View style={styles.section}>
                                    <View style={{flexDirection: 'column', flex: 1}} >
                                        <Text style={iOSUIKit.subheadEmphasized}>Fréquence</Text>
                                    </View>
                                    <View style={{flexDirection: 'column'}} >
                                        <RNPickerSelect
                                            placeholder={{
                                                label: 'Choisir une fréquence',
                                                value: '',
                                            }}
                                            onValueChange={(value) => this.state.tower2.wateringFrequency = value}
                                            items={[
                                                { label: '1 minute', value: 60000 },
                                                { label: '2 minutes', value: 120000 },
                                                { label: '3 minutes', value: 180000 },
                                                { label: '4 minutes', value: 240000 },
                                                { label: '5 minutes', value: 300000 },
                                                { label: '6 minutes', value: 360000 },
                                                { label: '7 minutes', value: 420000 },
                                            ]}
                                        />
                                    </View>
                                </View>
                                <View style={styles.section}>
                                    <View style={{flexDirection: 'column', flex: 1}} >
                                        <Text style={iOSUIKit.subheadEmphasized}>Durée</Text>
                                    </View>
                                    <View style={{flexDirection: 'column'}} >
                                        <RNPickerSelect
                                            placeholder={{
                                                label: 'Choisir une durée',
                                                value: '',
                                            }}
                                            onValueChange={(value) => this.state.tower2.wateringDuration = value}
                                            items={[
                                                { label: '1 seconde', value: 1000 },
                                                { label: '2 secondes', value: 2000 },
                                                { label: '3 secondes', value: 3000 },
                                                { label: '4 secondes', value: 4000 },
                                                { label: '5 secondes', value: 5000 },
                                                { label: '6 secondes', value: 6000 },
                                                { label: '7 secondes', value: 7000 },
                                            ]}
                                        />
                                    </View>
                                </View>
                            </Card>
                            <Text style={{...iOSUIKit.bodyEmphasizedWhite, marginLeft: 13, marginBottom: -10, marginTop: 16}}>Tour 3</Text>
                            <Card containerStyle={styles.cardElevated}>
                                <View style={styles.section}>
                                    <View style={{flexDirection: 'column', flex: 1}}>
                                        <Text style={iOSUIKit.subheadEmphasized}>Activée</Text>
                                    </View>
                                    <View style={{flexDirection: 'column'}}>
                                        <Switch
                                            onValueChange={this.onTower3ValueChange}
                                            value={this.state.tower3.active}/>
                                    </View>
                                </View>
                                <View style={styles.section}>
                                    <View style={{flexDirection: 'column', flex: 1}} >
                                        <Text style={iOSUIKit.subheadEmphasized}>Fréquence</Text>
                                    </View>
                                    <View style={{flexDirection: 'column'}} >
                                        <RNPickerSelect
                                            placeholder={{
                                                label: 'Choisir une fréquence',
                                                value: '',
                                            }}
                                            onValueChange={(value) => this.state.tower3.wateringFrequency = value}
                                            items={[
                                                { label: '1 minute', value: 60000 },
                                                { label: '2 minutes', value: 120000 },
                                                { label: '3 minutes', value: 180000 },
                                                { label: '4 minutes', value: 240000 },
                                                { label: '5 minutes', value: 300000 },
                                                { label: '6 minutes', value: 360000 },
                                                { label: '7 minutes', value: 420000 },
                                            ]}
                                        />
                                    </View>
                                </View>
                                <View style={styles.section}>
                                    <View style={{flexDirection: 'column', flex: 1}} >
                                        <Text style={iOSUIKit.subheadEmphasized}>Durée</Text>
                                    </View>
                                    <View style={{flexDirection: 'column'}} >
                                        <RNPickerSelect
                                            placeholder={{
                                                label: 'Choisir une durée',
                                                value: '',
                                            }}
                                            onValueChange={(value) => this.state.tower3.wateringDuration = value}
                                            items={[
                                                { label: '1 seconde', value: 1000 },
                                                { label: '2 secondes', value: 2000 },
                                                { label: '3 secondes', value: 3000 },
                                                { label: '4 secondes', value: 4000 },
                                                { label: '5 secondes', value: 5000 },
                                                { label: '6 secondes', value: 6000 },
                                                { label: '7 secondes', value: 7000 },
                                            ]}
                                        />
                                    </View>
                                </View>
                            </Card>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.sendConfigurationsToApi}
                            >
                                <Text style={iOSUIKit.caption2Emphasized}> Sauvegarder </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </LinearGradient>
            </View>
        );
    }

    sendConfigurationsToApi() {
        fetch('http://206.167.241.235/api/config', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                towers: {tower1 : this.state.tower1, tower2: this.state.tower2, tower3 : this.state.tower3},
            }),
        })
        .then((response) => response.json())
        .then((jsonResponse) => Alert.alert("Modification", jsonResponse.message, [{text: 'OK', onPress: () => console.log('OK Pressed')}]))
        .catch((error) => {
            console.error(error);
        });

    }

    onTower1ValueChange(value){
        this.setState(previousState => ({
            tower1 : {
                ...previousState.tower1,
                active : value
            }
        }));
    }

    onTower2ValueChange(value){
        this.setState(previousState => ({
            tower2 : {
                ...previousState.tower2,
                active : value
            }
        }));
    }

    onTower3ValueChange(value){
        this.setState(previousState => ({
            tower3 : {
                ...previousState.tower3,
                active : value
            }
        }));
    }
}


let styles = StyleSheet.create({
    cardElevated: {
        shadowColor: "#000",
        minHeight: 60,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 2
    },

    button: {
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowColor: "#000",
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 2,
        margin: 16,
    },

    section: {
        flexDirection : 'row',
        marginBottom: 8,
        borderBottomWidth: 1,
        height: 40,
        borderBottomColor: '#d0d0d0'
    }
});
