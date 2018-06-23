import React from 'react';
import Logo from '../../assets/img/nfprod-04.png';
import LoginForm from './LoginForm.js';
import { StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native';

const login = () => {
    return (
      <KeyboardAvoidingView behavior="padding" style={ styles.container }>
        <Image
          source={ Logo }
          style={ styles.logo }/>
        <LoginForm />
      </KeyboardAvoidingView>
    );
}

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f1e3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '40%',
    height: 140,
    marginTop: 80,
    marginBottom: 20,
  },
});
