import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import ArrowLeftBlue from '../../assets/svg/arrow-left-blue';
import Perfil from '../../assets/svg/menu-perfil';
import CerrarSession from '../../assets/svg/cerrar-sesion';
//Screens
import Home from '../../screens/Home';
import Donacion from '../../screens/Donacion';
const Drawer = createDrawerNavigator();

const MenuDrawer = () => {
  const goToInicio = async (props) => {
    return props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Home'}],
      }),
    );
  };

  const CustomDrawerContent = (props) => {
    //const insets = useSafeArea();
    return (
      <DrawerContentScrollView
        showsVerticalScrollIndicator={false}
        style={styles.drawerStyle}>
        <View style={styles.container}>
          <View>
            <TouchableOpacity
              style={styles.menuDrawer}
              onPress={() =>
                props.navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{name: 'Home'}],
                  }),
                )
              }>
              <ArrowLeftBlue width={23} height={23} />
              <Text style={styles.textDrawer}>Menú</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonbodycontainer}>
            <TouchableOpacity
              style={styles.optionDrawer}
              onPress={() => props.navigation.navigate('Home')}>
              <Perfil width={23} height={23} />
              <Text style={styles.textDrawer}>Home</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonbodycontainerCerrarSesion}>
            <TouchableOpacity
              style={styles.optionDrawer}
              onPress={() => {
                // agregar el async store clear
                //reset();
                goToInicio(props);
              }}>
              <CerrarSession width={23} height={23} />
              <Text style={styles.cerrarSesion}>Cerrar Session</Text>
            </TouchableOpacity>
          </View>
        </View>
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Donacion" component={Donacion} />
    </Drawer.Navigator>
  );
};

export default MenuDrawer;

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
  drawerStyle: {
    borderTopEndRadius: 25,
    borderBottomEndRadius: 25,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 25,
    paddingLeft: 10,
    //backgroundColor: 'red',
  },

  buttonbodycontainer: {
    flex: 1,
    width: '100%',
    height: height * 0.09,
    justifyContent: 'center',
    paddingLeft: '8%',
  },
  buttonbodycontainerCerrarSesion: {
    flex: 1,
    width: '100%',
    height: height * 0.09,
    justifyContent: 'center',
    paddingLeft: '8%',
    marginTop: width * 0.08,
  },
  textDrawer: {
    color: '#122E5C',
    fontFamily: 'ProximaNova-Bold',
    fontSize: width * 0.055,
    marginLeft: 5,
  },
  cerrarSesion: {
    color: '#122E5C',
    fontFamily: 'ProximaNova-Bold',
    fontSize: width * 0.04,
    marginLeft: 5,
  },
  menuDrawer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  optionDrawer: {
    flexDirection: 'row',
  },
});
