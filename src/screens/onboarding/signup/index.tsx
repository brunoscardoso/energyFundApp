import React, {useState} from 'react';

import Input from 'components/input';
import Button from 'components/button';
import Checkbox from 'components/checkbox';
import AvoidKeyboard from 'components/avoidKeyboard';
import Header from 'screens/onboarding/components/header';
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

        <AvoidKeyboard>
          <Input label="First Name" value="Joe" />
          <Input label="Last Name" value="Smith" />
          <Input label="E-mail" value="john@doe.com" />
          <Input label="Password" placeholder="Minimum 8 characters" />

          <Checkbox
            label="I am over 18 years of age and I have read and agree to the"
            labelUnderline="Terms of Service and Privacy policy"
          />

          <Button label="Create account" onPress={() => console.log('xd')} />

          <TextButton
            label={'Already have an account?'}
            subLabel="Login in here"
            onPress={() => navigation.navigate('login')}
          />
        </AvoidKeyboard>
      </S.Container>
    </S.SafeArea>
  );
}
