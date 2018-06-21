import React from 'react';
import Logo from './assets/img/nfprod-04.png';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <Image
          source={ Logo }
          style={ styles.logo }/>
        <View style={ styles.box }>
          <Text
            style={ styles.label }>Nome de usuário</Text>
          <TextInput
            placeholder="Insira o seu login"
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
            underlineColorAndroid='transparent'
            style={ styles.input }/>
          <Text
            style={ styles.label }>Senha</Text>
          <TextInput
            placeholder="Insira a sua senha"
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
            underlineColorAndroid='transparent'
            style={ styles.input }/>
          <Button
             title="Entrar"
             raised={true}
             color="#ffa502"
             style={ styles.btn }
             onPress={(e) => console.log(e)}/>
           <View
             style={ styles.subTitles }>
             <Text style={ styles.subTitle }>Faça seu cadastro</Text>
             <Text style={ styles.subTitle }>Esqueceu a sua senha?</Text>
           </View>
        </View>
    </View>
    );
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
