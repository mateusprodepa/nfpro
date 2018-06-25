import React from 'react';
import CadastroForm from './CadastroForm';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';

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
  }
});
