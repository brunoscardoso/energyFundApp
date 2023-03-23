import React from 'react';

import Input from 'components/Input';
import Button from 'components/Button';

import * as S from './styles';

export default function Login() {
  return (
    <S.SafeArea>
      <S.Container>
        <S.Title>Login</S.Title>
        <Input label="E-mail" value="john@doe.com" />
        <Input label="Password" placeholder="Minimum 8 characters" />

        <Button label="Login" onPress={() => console.log('xd')} />
      </S.Container>
    </S.SafeArea>
  );
}
