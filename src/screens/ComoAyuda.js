import React from 'react';
import {ScrollView, Text, StyleSheet, Image} from 'react-native';
import CustomHeader from '../components/Navigation/Header';
//import campañas from '../utils/camapañas.json'
import Chart from '../assets/images/chart.png';
const ComoAyuda = ({navigation}) => {
  return (
    <ScrollView>
      <CustomHeader isHome={false} title="¿Cómo ayuda mi donación?" navigation={navigation} />
      <Text
      style={styles.infoTextStyle}
      >{"\n"}Las comidas compartidas nos ayudan a combatir el hambre para siempre. La mayor parte de las donaciones apoyan a las familias más necesitadas y padecen de hambre así como a los colegios y sus almuerzos para garantizar que sean decentes.
      </Text>
      <Image source={Chart} style={styles.chart} />
    </ScrollView>
  );
};

export default ComoAyuda;


const styles = StyleSheet.create(
    {
      infoTextStyle:{
        fontSize: 20,
        paddingLeft: 50,
        flex: 1, 
        flexDirection: 'row',
        paddingRight: 10
      },
      chart:{
        
        flex: 1, 
        flexDirection: 'row',
        width:400,
        height:200
      }
    }
  )

const campañas = [
    {
        "id": 1,
        "nombre": "Comida para Puno",
        "resumen": "Las comidas compartidas nos ayudan a combatir el hambre para siempre. La mator parte de las donaciones apoyan a las familias más necesitadas y padecen de hambre así como a los colegios y sus almuerzos para garantizar que sean decentes.",
        "distribucion":[
            {
                "nombre": "Sector agrícola",
                "descrip": "Para la gente de los huertos",
                "value": 10
            },
            {
                "nombre": "Colegios y escuelas",
                "descrip": "Almuerzos escolares",
                "value": 40
            },
            {
                "nombre": "Insumos de cocina",
                "descrip": "Para amas de casa y sus compras diarias",
                "value": 30
            },
            {
                "nombre": "Reparticiones semanales",
                "descrip": "Alimentos no perecibles todos los viernes en el municipio",
                "value": 20
            }
        ]
    }
]