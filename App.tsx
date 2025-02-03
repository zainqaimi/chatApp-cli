import {View, Text, StatusBar, Button} from 'react-native';
import React, {useContext} from 'react';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext} from './src/context/ThemeContext';
import {createStackNavigator} from '@react-navigation/stack';
import ChatsList from './src/screens/ChatsList';
import ChatScreen from './src/screens/ChatScreen';

const Stack = createStackNavigator();
const App = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={theme.background} />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
