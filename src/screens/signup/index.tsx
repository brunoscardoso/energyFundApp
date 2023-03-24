import React from 'react';

import Header from 'components/Header';
import Input from 'components/Input';
import Button from 'components/Button';

import * as S from './styles';

export default function SignUp() {
  return (
    <S.SafeArea>
      <S.Container>
        <Header title="Login" totalSteps={3} />

        <Input label="First Name" value="Joe" />
        <Input label="Last Name" value="Smith" />
        <Input label="E-mail" value="john@doe.com" />
        <Input label="Password" placeholder="Minimum 8 characters" />

        <Button label="Login" onPress={() => console.log('xd')} />
      </S.Container>
    </S.SafeArea>
  );
}
