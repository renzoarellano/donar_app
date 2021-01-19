import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import CustomHeader from '../components/Navigation/Header';
const Detalle = ({navigation}) => {
  return (
    <View>
      <CustomHeader
        isHome={false}
        title="Detalle de Donación"
        navigation={navigation}
      />
      <TouchableOpacity>
        <Text>Boton</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Detalle;
