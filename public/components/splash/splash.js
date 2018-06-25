import React from 'react';
import Logo from '../../assets/img/nfprod-04.png';
import { View, Image, Button } from 'react-native';

const splash = () => {
  return (
    <View style={ styles.container }>
      <Image
        source={ Logo }
        resizeMode="contain"
        style={ styles.logo
         }/>

      <Button />
      <Button />
    </View>
  )
}

export default splash;

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
