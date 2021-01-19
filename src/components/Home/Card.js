import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const Card = ({item, navigation}) => {
  console.log('🚀 ~ file: Card.js ~ line 5 ~ Card ~ item', item);
  const {id, title, imagen, cantidadDonada, meta} = item.item;
  const calculateBar = (donado, metaPorCumplir) => {
    let percent = (donado * 100) / metaPorCumplir;
    if (percent > 100) {
      percent = 100;
    }
    return (
      <>
        <View style={styles.barraCarga}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: '#6495ED',
              borderRadius: 25,
              height: 10,
              width: `${percent}%`,
            }}
          />
        </View>
        <Text style={styles.textBarraCarga}>
          {percent.toFixed()}% Completado
        </Text>
      </>
    );
  };
  return (
    <View style={styles.cardContainer} key={id}>
      <TouchableOpacity
        style={styles.buttonCardContainer}
        onPress={() =>
          navigation.navigate('Detalle', {
            institucion: item.item,
          })
        }>
        <Image resizeMode="cover" style={styles.imageCard} source={imagen} />
        <View style={styles.contentCard}>
          <Text style={styles.textCard}>{title}</Text>
          {calculateBar(cantidadDonada, meta)}
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Card;
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
  textCard: {
    color: '#6495ED',
    fontSize: width * 0.05,
    fontFamily: 'ProximaNova-Bold',
    marginVertical: height * 0.015,
  },
  buttonCardContainer: {
    width: '100%',
    borderColor: '#6495ED',
    borderWidth: 2,
    borderRadius: 5,
  },
  imageCard: {
    width: '100%',
    height: height * 0.2,
  },
  cardContainer: {
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 15,
  },
  contentCard: {
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'column',
    alignItems: 'center',
  },
  barraCarga: {
    backgroundColor: '#F2F2F2',
    borderRadius: 50,
    height: 10,
    width: '100%',
  },
  textBarraCarga: {
    color: 'black',
    fontFamily: 'ProximaNova-Bold',
    fontSize: width * 0.04,
    marginVertical: 5,
  },
});
