import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalContext} from '../contexts/GlobalContext';
import {COLORS} from '../helpers/customColor';

const {width, height} = Dimensions.get('window');
export default function Pizza({pizza}) {
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [added, setAdded] = useState(false);
  const add = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(item => item.name === product.name);
      if (!existProduct) {
        cartArray.push(product);
        await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
      }
    } else {
      const cartArray = [];
      cartArray.push(product);
      await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
    }
    await setRefresh(!refresh);
  };

  const remove = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(item => item.name === product.name);
      if (existProduct) {
        const newArray = cartArray.filter(item => item.name !== product.name);
        await AsyncStorage.setItem('cartList', JSON.stringify(newArray));
      }
    }
    await setRefresh(!refresh);
  };

  const define = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(item => item.name === product.name);
      if (existProduct) {
        remove(product);
      } else {
        add(product);
      }
    } else {
      add(product);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      if (cartList) {
        const cartArray = JSON.parse(cartList);
        const existProduct = cartArray.find(item => item.name === pizza.name);
        if (existProduct) {
          setAdded(true);
        } else {
          setAdded(false);
        }
      }
    };

    getProduct();
  }, [refresh]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.rowItem}>
          <Text style={styles.name}>{pizza.name}</Text>

          <Text style={styles.menu}>{pizza.menu}</Text>
        </View>

        <Image source={pizza.image} style={styles.image} />
      </View>

      <View style={styles.row}>
        <Text style={styles.price}>12$</Text>

        <TouchableOpacity style={styles.button} onPress={() => define(pizza)}>
          <Text style={styles.buttonText}>
            {!added ? 'Добавить' : 'Убрать'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: COLORS.cardBackground,
    marginTop: 15,
    borderRadius: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  image: {
    width: width * 0.3,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  rowItem: {
    width: '50%',
  },
  name: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: '600',
  },
  menu: {
    fontSize: 12,
    color: COLORS.black,
    fontWeight: '300',
    marginTop: 10,
  },
  price: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: '300',
    opacity: 0.5,
    marginTop: 10,
  },
  button: {
    backgroundColor: COLORS.mainBackground,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 14,
    color: COLORS.white,
    fontWeight: '600',
  },
});
