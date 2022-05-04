import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AdaptiveCardSample1Screen from './src/screens/AdaptiveCardSample1Screen';
import AdaptiveCardSample2Screen from './src/screens/AdaptiveCardSample2Screen';
import AdaptiveCardSample3Screen from './src/screens/AdaptiveCardSample3Screen';
import AdaptiveCardSample4Screen from './src/screens/AdaptiveCardSample4Screen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="AdaptiveCardSample1Screen"
          component={AdaptiveCardSample1Screen}
        />
        <Stack.Screen
          name="AdaptiveCardSample2Screen"
          component={AdaptiveCardSample2Screen}
        />
        <Stack.Screen
          name="AdaptiveCardSample3Screen"
          component={AdaptiveCardSample3Screen}
        />
        <Stack.Screen
          name="AdaptiveCardSample4Screen"
          component={AdaptiveCardSample4Screen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
