import React from 'react';

import Header from 'screens/onboarding/components/header';
import Input from 'components/input';
import Button from 'components/button';
import TextButton from 'screens/onboarding/components/textButton';

import * as S from './styles';

export default function Login({navigation}) {
  return (
    <S.SafeArea>
      <S.Container>
        <Header title="Login" />

        <Input label="E-mail" value="john@doe.com" />
        <Input label="Password" placeholder="Minimum 8 characters" />

        <Button label="Login" onPress={() => navigation.navigate('home')} />

        <TextButton
          label={"Don't have account?"}
          subLabel="Sign up here"
          onPress={() => navigation.navigate('signup')}
        />
      </S.Container>
    </S.SafeArea>
  );
}
