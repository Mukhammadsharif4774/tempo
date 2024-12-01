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
import Busket from '../images/busket.png';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../helpers/customColor';
import CustomButton from '../details/CustomButton';

export default function Table() {
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
        <Text style={styles.title}>Резерв столика</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Ваше имя</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Номер телефона</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Адрес ресторана</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Столик</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Комментарий</Text>
        <TextInput
          style={styles.textArea}
          multiline={true}
          numberOfLines={10}
        />
      </View>

      <CustomButton
        text={'Зарезервировать'}
        onPress={() => navigation.navigate('ForReserve')}
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
  label: {
    fontSize: 14,
    color: COLORS.fontBlack,
    opacity: 0.4,
    marginTop: 20,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  textArea: {
    height: 100,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
});
