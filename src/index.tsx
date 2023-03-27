import React from 'react';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import Routes from './routes';
import colors from 'themes/colors';
import {store} from './redux/store';

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <ThemeProvider theme={colors}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
