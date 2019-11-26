import React, { Component } from 'react';
import { Text, View, TextInput, Button, AsyncStorage, ActivityIndicator } from 'react-native';
import Toast from 'react-native-tiny-toast'
import Home from './Home';

export default class Login extends Component {
  state = {
    username: 'kamlesh',
    password: 'qwerty',
    isLoggedIn: false,
    error: '',
    loading: false
  }

  componentDidMount = async () => {
    try {
      let LoggedIn = await AsyncStorage.getItem('isLoggedIn')
      this.setState({ isLoggedIn: LoggedIn, loading: false })
    }
    catch (err) {
      this.setState({ error: 'login again'})
    }
  }

  onLogin = async () => {
    try {
      if (this.state.username === 'kamlesh' && this.state.password === 'qwerty') {
        await AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
        this.setState({ loading: false , isLoggedIn: true })
      }
      else {
        this.setState({ error: 'Please Provide Username and Password', loading: false })
      }
    } catch (error) {
      this.setState({ loading: false, error: 'login error' })
    }
  }

  showDefault = (error) => {
    Toast.show(error, { duration: 1000 })
  }

  onLogout = async () => {
    try {
      await AsyncStorage.clear();
      this.setState({
        isLoggedIn: false,
        loading: false
      })
      await AsyncStorage.setItem('isLoggedIn', JSON.stringify(false));
    }
    catch (err) {
      this.state({ error: 'logout error'})
    }
  }

  render() {
    console.disableYellowBox = true;

if (this.state.loading) {
      return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}><ActivityIndicator size="small" color="#00ff00" /></View>
    }
    else if (this.state.isLoggedIn) {
      return <Home onLogout={this.onLogout} />
    }
    else{
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
          <View style={{ margin: 20, borderWidth: 2, padding: 10, width: 200, borderRadius: 10, borderColor: '#00ff00' }}>
            <TextInput name="username" value={this.state.username} placeholder="username" onChangeText={(text) => this.setState({ username: text })} />
          </View>
          <View style={{ marginBottom: 20, borderWidth: 2, padding: 10, width: 200, borderRadius: 10, borderColor: '#00ff00' }}>
            <TextInput name="password" value={this.state.password} placeholder="password" onChangeText={(text) => this.setState({ password: text })} />
          </View>
          <View>
            <Button
              color="#00ff00"
              style={{ margin: 20 }}
              title="Login"
              onPress={() => this.onLogin()}
            /></View>
          { this.state.error ? this.showDefault(this.state.error) : null }
        </View>
      );
    }
  }
}
