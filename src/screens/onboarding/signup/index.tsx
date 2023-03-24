import React from 'react';

import Header from 'screens/onboarding/components/header';
import Input from 'components/input';
import Button from 'components/button';
import TextButton from 'screens/onboarding/components/textButton';

import * as S from './styles';

export default function SignUp({navigation}) {
  return (
    <S.SafeArea>
      <S.Container>
        <Header
          title="Login"
          totalSteps={3}
          onPress={() => navigation.goBack()}
        />

        <Input label="First Name" value="Joe" />
        <Input label="Last Name" value="Smith" />
        <Input label="E-mail" value="john@doe.com" />
        <Input label="Password" placeholder="Minimum 8 characters" />

        <Button label="Create account" onPress={() => console.log('xd')} />

        <TextButton
          label={'Already have an account?'}
          subLabel="Login in here"
          onPress={() => navigation.navigate('login')}
        />
      </S.Container>
    </S.SafeArea>
  );
}
