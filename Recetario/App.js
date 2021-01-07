import React from 'react';
import HomeScreen from './Components/HomeScreen';
import IngrdientsScreen from './Components/IngredientsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Ingredients"
          options={{headerShown: false}}
          component={IngrdientsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
