import React from 'react';

import Header from 'components/Header';
import Input from 'components/Input';
import Button from 'components/Button';
import TextButton from 'components/TextButton';

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
