import {View, Text, StatusBar, Button} from 'react-native';
import React, {useContext} from 'react';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext} from './src/context/ThemeContext';
const App = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={theme.background} />
      <Home />
    </NavigationContainer>
  );
};

export default App;
