import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../helpers/customColor';
import {useNavigation} from '@react-navigation/native';
import CheckImage from '../images/check-circle.png';
import CustomButton from '../details/CustomButton';

const {width, height} = Dimensions.get('window');
export default function ForReserve() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainHeader}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <View style={styles.hamItem} />
          <View style={styles.hamItemSecond} />
          <View style={styles.hamItemThird} />
        </TouchableOpacity>

        <TouchableOpacity></TouchableOpacity>
      </View>

      <View style={styles.main}>
        <Image source={CheckImage} style={styles.image} />

        <Text style={styles.title}>Спасибо за заказ!</Text>
      </View>

      <CustomButton
        text={'На главную'}
        onPress={() => navigation.navigate('Main')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  image: {
    width: 200,
    height: 200,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    color: COLORS.mainBackground,
    marginTop: 100,
    fontWeight: '800',
  },
});
