import React from 'react';
import {View, Text} from 'react-native';
import CustomHeader from '../components/Navigation/Header';
const Donacion = ({navigation}) => {
  return (
    <View>
      <CustomHeader isHome={false} title="Donación" navigation={navigation} />
      <Text>Donacion</Text>
    </View>
  );
};

export default Donacion;
