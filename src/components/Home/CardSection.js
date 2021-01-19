import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {INSTITUCIONES} from '../../utils/constants';
import Card from './Card';
const CardSection = ({navigation}) => {
  if (INSTITUCIONES) {
    console.log(
      '🚀 ~ file: CardSection.js ~ line 14 ~ CardSection ~ INSTITUCIONES',
      INSTITUCIONES,
    );
    if (INSTITUCIONES.length !== 0) {
      return (
        <View style={styles.cardSectionContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.card}
            data={INSTITUCIONES}
            renderItem={(object) => (
              <Card item={object} navigation={navigation} />
            )}
            keyExtractor={(item, index) => index.toString()}
            numColumns={1}
            onEndReachedThreshold={0.5}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.emptyContiner}>
          <View style={styles.emptysubContainer}>
            <Text style={styles.textEmpty}>
              No has hecho ninguna operacion hasta la fecha
            </Text>
          </View>
        </View>
      );
    }
  } else {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: height * 0.7,
        }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
};

export default CardSection;

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
  cardSectionContainer: {
    //backgroundColor: 'green',
    width: '100%',
    height: 'auto',
    flex: 1,
  },
  card: {
    //backgroundColor: 'yellow',
    width: '100%',
    height: height * 0.6,
  },
  emptyContiner: {
    height: height * 0.1,
    alignItems: 'center',
  },
  emptysubContainer: {
    width: '90%',
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    height: '30%',
    justifyContent: 'center',
    padding: width * 0.05,
  },
  imgempty: {
    width: '10%',
    height: '10%',
    resizeMode: 'contain',
    marginBottom: height * 0.05,
  },
  textEmpty: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: height * 0.018,
    color: '#B3B3B3',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
