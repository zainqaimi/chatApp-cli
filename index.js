/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ThemeContext, ThemeProvider} from './src/context/ThemeContext';
import React from 'react';
const Main = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
AppRegistry.registerComponent(appName, () => Main);
