import React from 'react';
import {ScrollView, View, StyleSheet, Dimensions} from 'react-native';
import CustomHeader from '../components/Navigation/Header';
import CardSection from '../components/Home/CardSection';
const Home = ({navigation}) => {
  return (
    <ScrollView nestedScrollEnabled={true}>
      <CustomHeader isHome={true} title="Home" navigation={navigation} />
      <View style={styles.backContainer}>
        <View style={styles.container}>
          <CardSection navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
};
export default Home;
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
  backContainer: {
    backgroundColor: '#122E5C',
    flexDirection: 'row',
  },
  container: {
    flex: 6,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 30,
    height: height,
  },
});
