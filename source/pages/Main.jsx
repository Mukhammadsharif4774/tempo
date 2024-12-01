import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {COLORS} from '../helpers/customColor';
import Busket from '../images/busket.png';
import {useNavigation} from '@react-navigation/native';
import {list} from '../helpers/list';
import Pizza from '../details/Pizza';

export default function Main() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
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

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Лучшая пицца в вашем городе</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView} style={{flex: 1}}>
        {list.map((item, index) => (
          <Pizza pizza={item} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
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
    height: 5,
    backgroundColor: COLORS.mainBackground,
  },
  hamItemSecond: {
    width: 32,
    height: 5,
    backgroundColor: COLORS.mainBackground,
    marginTop: 4,
  },
  hamItemThird: {
    width: 30,
    height: 5,
    backgroundColor: COLORS.mainBackground,
    marginTop: 4,
  },
  busket: {
    width: 32,
    height: 32,
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    width: '50%',
    color: COLORS.fontBlack,
    fontSize: 20,
    fontWeight: '600',
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
});
