import React from 'react';
import {styles} from '../styles/mainTheme';
import {View, TouchableOpacity, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const HomeScreen = ({navigation}: NativeStackScreenProps) => {
  return (
    <View>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>Adaptive Cards Samples</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AdaptiveCardSample1Screen')}>
          <Text style={styles.buttonText}>Action Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AdaptiveCardSample2Screen')}>
          <Text style={styles.buttonText}>Flight Reservation Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AdaptiveCardSample3Screen')}>
          <Text style={styles.buttonText}>Weather Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AdaptiveCardSample4Screen')}>
          <Text style={styles.buttonText}>Login Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
