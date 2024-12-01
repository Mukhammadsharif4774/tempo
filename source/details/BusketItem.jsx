import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GlobalContext} from '../contexts/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS} from '../helpers/customColor';
import Plus from '../images/plus.png';
import Minus from '../images/minus.png';

const {width, height} = Dimensions.get('window');
export default function BusketItem({pizza}) {
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const getCartList = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      if (cartList?.length) {
        setCarts(JSON.parse(cartList));
      }
    };

    getCartList();
  }, [refresh]);

  const increment = async () => {
    if (carts?.length) {
      const selectedItem = carts.find(product => product.name === pizza.name);
      if (selectedItem) {
        const selectedIndex = carts.indexOf(selectedItem);
        if (selectedIndex !== null) {
          const newArray = carts;
          newArray[selectedIndex].count = newArray[selectedIndex].count + 1;
          await AsyncStorage.setItem('cartList', JSON.stringify(carts));
          await setRefresh(!refresh);
        }
      }
    }
  };

  const decrement = async () => {
    if (carts?.length) {
      const selectedItem = carts.find(product => product.name === pizza.name);
      if (selectedItem) {
        const selectedIndex = carts.indexOf(selectedItem);
        if (selectedIndex !== null) {
          const newArray = carts;
          if (newArray[selectedIndex].count > 0) {
            newArray[selectedIndex].count = newArray[selectedIndex].count - 1;
            await AsyncStorage.setItem('cartList', JSON.stringify(carts));
            await setRefresh(!refresh);
          }
        }
      }
    }
  };

  const deleteItem = async () => {
    if (carts?.length) {
      const newArray = carts.filter(product => product.name !== pizza.name);
      await setCarts(newArray);
      await AsyncStorage.setItem('cartList', JSON.stringify(newArray));
      await setRefresh(!refresh);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={pizza.image} style={styles.image} />

      <View style={styles.half}>
        <Text style={styles.name}>{pizza.name}</Text>

        <Text style={styles.menu}>{pizza.menu}</Text>

        <Text style={styles.price}>{`${pizza.count * 12}.00 $`}</Text>

        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              if (pizza.count > 1) {
                decrement();
              } else {
                deleteItem();
              }
            }}>
            <Image source={Minus} style={styles.button} />
          </TouchableOpacity>

          <Text style={styles.count}>{pizza?.count}</Text>

          <TouchableOpacity onPress={() => increment()}>
            <Image source={Plus} style={styles.button} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },
  image: {
    width: width * 0.3,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  half: {
    width: '60%',
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
    marginTop: 5,
    opacity: 0.5,
  },
  price: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: '600',
    opacity: 1,
    marginTop: 5,
  },
  button: {
    width: 25,
    height: 25,
  },
  buttonText: {
    // fontSize: 24,
    color: COLORS.white,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  count: {
    color: COLORS.black,
    fontWeight: '600',
    marginHorizontal: 20,
    fontStyle: 'italic',
  },
});
