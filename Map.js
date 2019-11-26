import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

class Map extends Component {
    render() {
        console.log(deviceWidth, 'deviceWidth', deviceHeight)
        return (
            <View>
                <MapView
                provider={PROVIDER_GOOGLE} 
                style={{ height:deviceHeight-300, width: deviceWidth}}
                region={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}
              >
              </MapView>
            </View>
        )
    }
}

export default Map