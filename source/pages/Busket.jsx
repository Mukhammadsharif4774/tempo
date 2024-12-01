import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../helpers/customColor';
import {GlobalContext} from '../contexts/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BusketItem from '../details/BusketItem';
import CustomButton from '../details/CustomButton';

export default function Busket() {
  const {refresh} = useContext(GlobalContext);
  const [selected, setSelected] = useState([]);
  const [price, setPrice] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const getBusketList = async () => {
      const list = await AsyncStorage.getItem('cartList');
      if (list?.length) {
        setSelected(JSON.parse(list));
      }
    };

    getBusketList();
  }, [refresh]);

  useEffect(() => {
    if (selected?.length) {
      let sum = 0;
      selected.forEach(product => {
        sum = sum + 12 * product.count;
      });

      setPrice(sum);
    }
  }, [selected, refresh]);

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

      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Корзина {!selected?.length ? 'пуста' : ''}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {selected?.length
          ? selected.map((item, index) => (
              <BusketItem pizza={item} key={index} />
            ))
          : ''}
      </ScrollView>

      {selected?.length ? (
        <View style={styles.row}>
          <Text style={styles.name}>Итого:</Text>

          <Text style={styles.name}>{price}$</Text>
        </View>
      ) : (
        ''
      )}

      {selected?.length ? (
        <CustomButton
          text={`Оплатить счет - $${price}.00`}
          onPress={() => navigation.navigate('ForOrder')}
        />
      ) : (
        ''
      )}
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
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 80,
  },
  name: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: '600',
  },
});
