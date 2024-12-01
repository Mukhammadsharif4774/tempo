import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Background from '../images/friends.png';
import LinearGradient from 'react-native-linear-gradient';
import Title from '../images/family-title.png';
import TextText from '../images/family-text.png';
import BackIcon from '../images/back-iconn.png';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');
export default function Family() {
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
        <Image source={TextText} style={styles.text} />
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    aspectRatio: 0.8,
    resizeMode: 'contain',
  },
  text: {
    aspectRatio: 1.2,
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
});
