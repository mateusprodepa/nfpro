import React from 'react';
import Login from './components/login/login';
import Cadastro from './components/cadastro/cadastro';
import Splash from './components/splash/splash';
import { createStackNavigator } from 'react-navigation';
import { View, Text, StatusBar, Platform } from 'react-native';

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight: 0
}

export default class App extends React.Component {
  render() {
    return (
      <Login />
    );
  }
}

const stackConfig = {
  initialRouteName: Splash,
  header: null,
}

const SignedOut = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      title: "Tela inicial",
      headerMode: "none",
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Logar",
      headerMode: "none",
    }
  },
  Cadastro: {
    screen: Cadastro,
    navigationOptions: {
      title: "Cadastre-se",
      headerMode: "none",
    }
  },
}, stackConfig);
