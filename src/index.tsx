import React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from 'styled-components/native';

import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';
import colors from 'themes/colors';

export default function App() {
  return (
    <ThemeProvider theme={colors}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
