import React from 'react';
import Logo from '../../assets/img/nfprod-04.png';
import CadastroForm from './CadastroForm.js';
import { StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native';

const cadastro = () => {
    return (
      <KeyboardAvoidingView behavior="padding" style={ styles.container }>
        <CadastroForm />
      </KeyboardAvoidingView>
    );
}

export default cadastro;

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
