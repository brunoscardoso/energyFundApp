import React from 'react';

import {ActivityIndicator, View} from 'react-native';

import theme from 'themes/colors';

interface IProps {
  loading: boolean;
}

export default function Loader({loading}: IProps) {
  if (!loading) {
    return null;
  }
  return (
    loading && (
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.palette.purple.tertiary,
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 100,
        }}>
        <ActivityIndicator color={theme.palette.purple.primary} />
      </View>
    )
  );
}
