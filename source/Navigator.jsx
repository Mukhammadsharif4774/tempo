import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from './pages/Main';
import Logo from './images/logo.png';
import Close from './images/close-i.png';
import BusketImage from './images/busket-main.png';
import {COLORS} from './helpers/customColor';
import Busket from './pages/Busket';
import Channels from './pages/Channels';
import Vocations from './pages/Vocations';
import Phone from './pages/Phone';
import Table from './pages/Table';
import Marathon from './pages/Marathon';
import Family from './pages/Family';
import NightWin from './pages/NightWin';
import Good from './pages/Good';
import MasterClass from './pages/MasterClass';
import ForOrder from './pages/ForOrder';
import ForReserve from './pages/ForReserve';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const {width, height} = Dimensions.get('window');
export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          component={DrawerNavigator}
          name="DrawerNavigator"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: width,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerNavigator {...props} />}>
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Busket" component={Busket} />
      <Drawer.Screen name="ForOrder" component={ForOrder} />
      <Drawer.Screen name="ForReserve" component={ForReserve} />
      <Drawer.Screen name="Channels" component={Channels} />
      <Drawer.Screen name="Vocations" component={Vocations} />
      <Drawer.Screen name="Phone" component={Phone} />
      <Drawer.Screen name="Table" component={Table} />
      <Drawer.Screen name="Marathon" component={Marathon} />
      <Drawer.Screen name="Family" component={Family} />
      <Drawer.Screen name="NightWin" component={NightWin} />
      <Drawer.Screen name="Good" component={Good} />
      <Drawer.Screen name="MasterClass" component={MasterClass} />
    </Drawer.Navigator>
  );
}

function CustomDrawerNavigator(props) {
  const navigation = useNavigation();
  return (
    <View {...props} style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.closeIconContainer}>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Image source={Close} style={styles.close} />
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <Image source={Logo} style={styles.drawerLogo} />
        </View>

        <View style={styles.mainContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DrawerNavigator', {screen: 'Main'})
            }
            style={styles.drawerItem}>
            <Text style={styles.itemText}>Главная</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DrawerNavigator', {screen: 'Busket'})
            }
            style={styles.drawerItem}>
            <Text style={styles.itemText}>Корзина</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DrawerNavigator', {screen: 'Channels'})
            }
            style={styles.drawerItem}>
            <Text style={styles.itemText}>Транслации</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DrawerNavigator', {screen: 'Vocations'})
            }
            style={styles.drawerItem}>
            <Text style={styles.itemText}>События</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DrawerNavigator', {screen: 'Phone'})
            }
            style={styles.drawerItem}>
            <Text style={styles.itemText}>Контакты</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DrawerNavigator', {screen: 'Table'})
            }
            style={styles.drawerItem}>
            <Text style={styles.itemText}>Резерв столика</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('DrawerNavigator', {screen: 'Busket'})
          }>
          <View style={styles.cartTransform}>
            <Image source={BusketImage} style={styles.busket} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.mainBackground,
    height: height - (height / 100) * 6,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 60,
    alignItems: 'center',
  },
  mainContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logoContainer: {
    width: '100%',
    height: 150,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 50,
  },
  logo: {
    width: '80%',
    height: '80%',
  },
  drawerItem: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginTop: 10,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: COLORS.white,
  },
  icon: {
    width: 25,
    height: 25,
  },
  footer: {
    justifyContent: 'center',
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
  },
  itemText: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 18,
    fontFamily: 'Rubik-Bold',
  },
  transform: {
    transform: 'scale(0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 30,
  },
  closeIconContainer: {
    position: 'absolute',
    left: 20,
    right: 0,
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  close: {
    width: 40,
    height: 40,
  },
  header: {
    width: '100%',
    height: 120,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerLogo: {
    height: 58,
    width: width / 1.6,
  },
  busket: {
    width: 60,
    height: 60,
  },
});
