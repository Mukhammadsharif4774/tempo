import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Background from '../images/lunch.png';
import LinearGradient from 'react-native-linear-gradient';
import Title from '../images/night-title.png';
import TextText from '../images/night-text.png';
import BackIcon from '../images/back-iconn.png';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');
export default function NightWin() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={Background} style={styles.background}>
      <LinearGradient
        colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)']}
        style={styles.linear}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <View style={styles.backContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Vocations')}>
            <Image source={BackIcon} style={styles.back} />
          </TouchableOpacity>
        </View>

        <Image source={Title} style={styles.title} />

        <View style={styles.textContainer}>
          <Image source={TextText} style={styles.text} />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: height,
  },
  linear: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    aspectRatio: 1.8,
    resizeMode: 'contain',
    marginTop: 50,
  },
  text: {
    aspectRatio: 1.4,
    resizeMode: 'contain',
  },
  back: {
    width: 25,
    height: 25,
  },
  backContainer: {
    width: '100%',
    paddingLeft: 10,
  },
  textContainer: {
    position: 'absolute',
    bottom: 50,
  },
});
