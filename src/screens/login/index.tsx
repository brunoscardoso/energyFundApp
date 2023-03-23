import React from 'react';

import Input from 'components/Input';

import * as S from './styles';

export default function Login() {
  return (
    <S.SafeArea>
      <S.Container>
        <S.Title>Login</S.Title>
        <Input label="E-mail" value="john@doe.com" />
        <Input label="Password" placeholder="Minimum 8 characters" />
      </S.Container>
    </S.SafeArea>
  );
}
