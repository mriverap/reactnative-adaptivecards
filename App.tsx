import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GetTemplatePayload} from './src/components/GetTemplatePayload';
import AdaptiveCard from 'adaptivecards-reactnative';

const App = () => {
  const templatePayload = GetTemplatePayload('sample2');
  return (
    <View>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>Adaptive Cards</Text>
      </View>
      <View style={styles.cardContainer}>
        <AdaptiveCard payload={templatePayload} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainTextContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  mainText: {
    fontSize: 30,
  },
  cardContainer: {
    margin: 20,
    marginTop: 40,
    borderColor: 'transparent',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    shadowRadius: 10,
    shadowColor: 'grey',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    elevation: 20,
  },
});
