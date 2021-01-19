import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import CustomHeader from '../components/Navigation/Header';
const Donacion = ({navigation}) => {
  return (
    <View>
      <CustomHeader isHome={false} title="Donación" navigation={navigation} />
      <Text>Donacion</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Detalle')}>
        <Text style={styles.button__texto}>Ir a detalle</Text>
      </TouchableOpacity>
    </View>
  );
};

const dim = Dimensions.get('screen');

const width =
  dim.height >= dim.width
    ? Dimensions.get('window').width
    : Dimensions.get('window').height;
const height =
  dim.height >= dim.width
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;

const styles = StyleSheet.create({
  button: {
    width: width * 0.5,
    height: 15,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  button__texto: {
    color: 'white',
  },
});

export default Donacion;
