import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Busket from '../images/busket.png';
import {COLORS} from '../helpers/customColor';

export default function Phone() {
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

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Контакты</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Адрес'}
          placeholderTextColor={COLORS.mainBackground}
          editable={false}
        />

        <TextInput
          style={styles.input}
          placeholder={'Город'}
          placeholderTextColor={COLORS.mainBackground}
          editable={false}
        />

        <TextInput
          style={styles.input}
          placeholder={'Страна'}
          placeholderTextColor={COLORS.mainBackground}
          editable={false}
        />

        <TextInput
          style={styles.input}
          placeholder={'Номер телефона'}
          placeholderTextColor={COLORS.mainBackground}
          editable={false}
        />
      </View>
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
  inputContainer: {
    paddingHorizontal: 20,
  },
  input: {
    height: 60,
    backgroundColor: 'rgba(18, 85, 152, 0.1)',
    borderRadius: 15,
    paddingLeft: 20,
    marginTop: 20,
  },
});
