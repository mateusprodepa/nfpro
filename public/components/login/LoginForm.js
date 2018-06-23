import React from 'react';
import axios from 'axios';
import { StyleSheet, View, Image, Text, TextInput, Button, StatusBar, TouchableOpacity } from 'react-native';

class loginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      errors: {}
    }
  }

  key(obj, val) { for(var chave in obj) { if(obj[chave] === val && obj.hasOwnProperty(chave)) return chave; }}

  updateLoginHandler(login) {
    this.setState({ ...this.state, login });
  }

  updatePassHandler(password) {
    this.setState({ ...this.state, password });
  }

  submitData(data) {
    for(var w in data) {
      if(data[w].length === 0 || '' && this.key(data, data[w] !== 'errors')) {
        const identificador = Object.keys(data).find(i => i === this.key(data, data[w]));
        return this.setState({
          ...this.state,
          errors: {
            ...this.errors,
            campoEmBranco: `${identificador} não pode ficar vazio`,
          }
        });
      };
    }

    axios.post('https://servidor-nfpro.herokuapp.com/api/usuarios', data)
    .then(res => res.json())
    .then(dados => console.warn(dados))
    .catch(err => this.setState({
      ...this.state,
      errors: {
        ...this.errors,
        erroConexao: "Erro ao fazer a requisição para o servidor",
      }
    }));
  }

  render() {
    return (
      <View style={ styles.box }>
        <StatusBar
          backgroundColor="#ffa502"
          barStyle="light-content"/>

        <Text
          style={ styles.label }>Nome de usuário</Text>
        <TextInput
          placeholder="Insira o seu login"
          placeholderTextColor="rgba(255, 255, 255, 0.4)"
          underlineColorAndroid='transparent'
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          onChangeText={(e) => this.updateLoginHandler(e)}
          style={ styles.input }/>
        <Text
          style={ styles.label }>Senha</Text>
        <TextInput
          placeholder="Insira a sua senha"
          placeholderTextColor="rgba(255, 255, 255, 0.4)"
          underlineColorAndroid='transparent'
          returnKeyType="go"
          secureTextEntry
          onChangeText={(e) => this.updatePassHandler(e)}
          ref={i => this.passwordInput = i}
          style={ styles.input }/>
        <Button
          title="Entrar"
          raised={true}
          color="#ffa502"
          style={ styles.btn }
          onPress={() => this.submitData(this.state)}/>
        <View
          style={ styles.subTitles }>
          <Text style={ styles.subTitle }>Faça seu cadastro</Text>
          <Text style={ styles.subTitle }>Esqueceu a sua senha?</Text>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f1e3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 300,
    backgroundColor: '#ff793f',
    padding: 32,
    borderRadius: 8,
  },
  logo: {
    width: '40%',
    height: 140,
    marginTop: 80,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 250,
    margin: 4,
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
    paddingLeft: 4,
    borderWidth: 0.5,
    borderColor: '#ffa502',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#ffffff'
  },
  label: {
    fontSize: 15,
    color: '#ffffff',
  },
  subTitles: {
    padding: 8,
  },
  subTitle: {
    color: '#f3f3f3',
    textAlign: 'center',
  },
  btn: {
    marginBottom: 5,
  }
});

export default loginForm;
