import React from 'react';

import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Dimensions,
} from 'react-native';

export default function AvoidKeyboard({children}) {
  const screen = Dimensions.get('window');

  return (
    <KeyboardAvoidingView
      style={{flex: 1, width: '100%'}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={
        Platform.OS === 'ios' ? screen.height * 0.1 : screen.height * 0.3
      }>
      <ScrollView>{children}</ScrollView>
    </KeyboardAvoidingView>
  );
}
