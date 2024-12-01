import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Busket from '../images/busket.png';
import {COLORS} from '../helpers/customColor';

export default function Vocations() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainHeader}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <View style={styles.hamItem} />
          <View style={styles.hamItemSecond} />
          <View style={styles.hamItemThird} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Busket')}>
          <Image source={Busket} style={styles.busket} />
        </TouchableOpacity>
      </View>

      <View style={styles.mainContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Marathon')}
          style={styles.drawerItem}>
          <Text style={styles.itemText}>Пицца-Марафон</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Family')}
          style={styles.drawerItem}>
          <Text style={styles.itemText}>Семейный День в Пиццерии</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('NightWin')}
          style={styles.drawerItem}>
          <Text style={styles.itemText}>Вечер Вин и Пиццы</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Good')}
          style={styles.drawerItem}>
          <Text style={styles.itemText}>Пицца для Благотворительности</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('MasterClass')}
          style={styles.drawerItem}>
          <Text style={styles.itemText}>Мастер-Класс</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  mainHeader: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  hamItem: {
    width: 34,
    height: 6,
    backgroundColor: COLORS.mainBackground,
    borderWidth: 1.2,
    borderColor: COLORS.white,
    borderRadius: 1,
  },
  hamItemSecond: {
    width: 32,
    height: 6,
    backgroundColor: COLORS.mainBackground,
    marginTop: 4,
    borderWidth: 1.2,
    borderColor: COLORS.white,
    borderRadius: 1,
  },
  hamItemThird: {
    width: 30,
    height: 6,
    backgroundColor: COLORS.mainBackground,
    marginTop: 4,
    borderWidth: 1.2,
    borderColor: COLORS.white,
    borderRadius: 1,
  },
  busket: {
    width: 32,
    height: 32,
  },
  mainContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 150,
  },
  drawerItem: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: COLORS.white,
  },
  itemText: {
    color: COLORS.white,
    fontWeight: '800',
    fontSize: 17,
  },
});
