import React from 'react';

import Header from 'components/Header';
import Input from 'components/Input';
import Button from 'components/Button';
import TextButton from 'components/TextButton';

import * as S from './styles';

export default function Login({navigation}) {
  return (
    <S.SafeArea>
      <S.Container>
        <Header title="Login" />

        <Input label="E-mail" value="john@doe.com" />
        <Input label="Password" placeholder="Minimum 8 characters" />

        <Button label="Login" onPress={() => console.log('xd')} />

        <TextButton
          label={"Don't have account?"}
          subLabel="Sign up here"
          onPress={() => navigation.navigate('signup')}
        />
      </S.Container>
    </S.SafeArea>
  );
}
