import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Busket from '../images/busket.png';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../helpers/customColor';

export default function Channels() {
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
        <Text style={styles.title}>Спортивные трансляции</Text>
      </View>

      <View style={styles.main}>
        <View style={styles.card}>
          <View>
            <Text style={styles.cardTitle}>IPL</Text>
            <Text style={styles.description}>ROYAL CHALLENGERS BANGALORE</Text>
            <Text style={styles.description}>CHENNAI SUPER KINGS</Text>
            <Text style={styles.date}>24.02 - 00:45</Text>
          </View>

          <View style={styles.circle} />
        </View>

        <View style={styles.cardActive}>
          <View>
            <Text style={styles.cardTitleActive}>UEFA CL</Text>
            <Text style={styles.descriptionActive}>Napoli</Text>
            <Text style={styles.descriptionActive}>Liverpool</Text>
            <Text style={styles.dateActive}>26.02 - 00:20</Text>
          </View>

          <View style={styles.circle} />
        </View>

        <View style={styles.card}>
          <View>
            <Text style={styles.cardTitle}>NHL</Text>
            <Text style={styles.description}>New York Islanders</Text>
            <Text style={styles.description}>New Jersey Devils</Text>
            <Text style={styles.date}>27.02 - 00:10</Text>
          </View>

          <View style={styles.circle} />
        </View>

        <View style={styles.cardActive}>
          <View>
            <Text style={styles.cardTitleActive}>IIHF</Text>
            <Text style={styles.descriptionActive}>Australia</Text>
            <Text style={styles.descriptionActive}>Canada</Text>
            <Text style={styles.dateActive}>28.02 - 00:45</Text>
          </View>

          <View style={styles.circle} />
        </View>

        <View style={styles.card}>
          <View>
            <Text style={styles.cardTitle}>Super League</Text>
            <Text style={styles.description}>MANCHESTER CITY</Text>
            <Text style={styles.description}>MILAN</Text>
            <Text style={styles.date}>01.03 - 00:50</Text>
          </View>

          <View style={styles.circle} />
        </View>
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
    color: COLORS.fontBlack,
    fontSize: 20,
    fontWeight: '600',
  },
  main: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  card: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    width: 15,
    height: 15,
    borderColor: COLORS.mainBackground,
    borderWidth: 1,
    borderRadius: 25,
  },
  cardTitle: {
    color: COLORS.fontBlack,
    fontSize: 14,
    fontWeight: '400',
  },
  description: {
    color: COLORS.fontBlack,
    fontSize: 14,
    fontWeight: '400',
    opacity: 0.5,
    marginTop: 3,
  },
  date: {
    color: COLORS.fontBlack,
    fontSize: 14,
    fontWeight: '400',
    marginTop: 3,
  },
  cardActive: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.mainBackground,
  },
  cardTitleActive: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '400',
  },
  descriptionActive: {
    color: COLORS.fontBlack,
    fontSize: 14,
    fontWeight: '400',
    opacity: 1,
    marginTop: 3,
  },
  dateActive: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '400',
    marginTop: 3,
  },
});
