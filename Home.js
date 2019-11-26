import React, { Component } from 'react';
import { Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import MapView from './Map';

class Home extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <TouchableOpacity onPress={() => this.props.onLogout()} style={{ backgroundColor: '#00ff00', borderWidth: 2 }}>
            <Text> Logout</Text>
          </TouchableOpacity>
        </View>
        <View>
          <MapView />
        </View>
        <View>
          <Text> Home</Text>
        </View>
      </View>
    )
  }
}


export default Home