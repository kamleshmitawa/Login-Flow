import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ErrorBoundaries extends Component {
    state = {
        error: ''
    }
    static getDerivedStateFromError(error) {
        return { error: error };
    }
    componentDidCatch(error, info) {
        console.log(error, info, 'error, info')
      }

    render() {
        if (this.state.error) {
            return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text> {this.state.error} </Text>
            </View>
        }
        return this.props.children;
    }
}
