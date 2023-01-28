import React from 'react';
import {AppRegistry, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './home';
import People from './people';

const RootStack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Details" component={People} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

// const Router = StackNavigator({
//   Home: {screen: Home},
//   People: {screen: People},
// });
