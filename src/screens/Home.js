import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import CustomHeader from '../components/Navigation/Header';
const Home = ({navigation}) => {
  return (
    <ScrollView>
      <CustomHeader isHome={true} title="Home" navigation={navigation} />
      <Text>Hola Mundo</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Donacion')}>
        <Text>Ir a Donacion</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default Home;
