/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ThemeProvider} from './src/context/ThemeContext';
const Main = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
AppRegistry.registerComponent(appName, () => Main);
