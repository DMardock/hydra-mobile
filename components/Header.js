import React from 'react';
import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {iOSUIKit} from 'react-native-typography';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHistory} from '@fortawesome/free-solid-svg-icons';

export const Header = ({titleContent}) => {
    return (
    <View
      style={{
        width: Dimensions.get('window').width,
        height: 115,
      }}>
      <LinearGradient
        end={{x: 1, y: 0.5}}
        start={{x: 0, y: 0.5}}
        colors={['#71b17d', '#6197c4']}
        style={{
          padding: 15 ,
          width: Dimensions.get('window').width,
          height: 115,
        }}>
        <Text style={iOSUIKit.largeTitleEmphasizedWhite}>{titleContent}</Text>
          <View style={{flexDirection: "row", paddingTop: 16}}>
              <FontAwesomeIcon
                  icon={faHistory}
                  style={{color: "white"}}
                  size={18}
              />
              <Text style={{...iOSUIKit.subheadWhite , paddingLeft: 8}}>2019-05-06 19:56</Text>
          </View>
        <View
          style={{
            paddingTop: 18,
            borderBottomColor: 'white',
            borderBottomWidth: 0.25,
          }}
        />
      </LinearGradient>
    </View>
  );
};
