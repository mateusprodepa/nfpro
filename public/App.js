import React from 'react';
import Login from './components/login/login';
import Cadastro from './components/cadastro/cadastro.js';
import { createStackNavigator } from 'react-navigation';
import { View, Text } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <Login />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Login,
});
