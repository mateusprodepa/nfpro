import React from 'react';
import Logo from '../../assets/img/nfprod-04.png';
import { View, Image, Button, StyleSheet } from 'react-native';
import { onSignIn } from '../../auth';

export default ({ navigation }) => {
  return (
    <View style={ styles.container }>
      <Image
        source={ Logo }
        resizeMode="contain"
        style={ styles.logo
         }/>

       <View style={{
           margin: 5,
           padding: 8,
           width: '65%'
         }}>
         <Button
           title="Logue na sua conta"
           raised={true}
           color="#ff793f"
           onPress={() => onSignIn().then(() => navigation.navigate("Login"))}/>
       </View>
       <View style={{
           margin: 5,
           padding: 8,
           width: '65%'
         }}>
         <Button
           title="Faça seu cadastro"
           raised={true}
           color="#ff793f"
           onPress={() => onSignIn().then(() => navigation.navigate("Cadastro"))}/>
       </View>
    </View>
  )
}

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
