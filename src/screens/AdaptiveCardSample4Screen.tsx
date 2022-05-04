import {Text, View} from 'react-native';
import React from 'react';
import {GetTemplatePayload} from '../components/GetTemplatePayload';
import AdaptiveCard from 'adaptivecards-reactnative';
import {styles} from '../styles/mainTheme';

const AdaptiveCardSample4Screen = () => {
  const templatePayload = GetTemplatePayload('sample4');
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

export default AdaptiveCardSample4Screen;
