import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import routesDefinitions from './routes-definitions';

export default function Routes() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={routesDefinitions.login.name}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={routesDefinitions.login.name}
          component={routesDefinitions.login.screen}
        />
        <Stack.Screen
          name={routesDefinitions.signup.name}
          component={routesDefinitions.signup.screen}
        />
        <Stack.Screen
          name={routesDefinitions.home.name}
          component={routesDefinitions.home.screen}
        />
        <Stack.Screen
          name={routesDefinitions.fundsDetails.name}
          component={routesDefinitions.fundsDetails.screen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
