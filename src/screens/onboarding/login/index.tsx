import React from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {user_save} from 'redux/actions/user';

import Input from 'components/input';
import Button from 'components/button';
import AvoidKeyboard from 'components/avoidKeyboard';
import TextButton from 'screens/onboarding/components/textButton';
import Header from 'screens/onboarding/components/header';

import * as S from './styles';

export default function Login({navigation}) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: any) => state.user);

  return (
    <S.SafeArea>
      <S.Container>
        <Header title="Login" />

        <AvoidKeyboard>
          <Input label="E-mail" value="john@doe.com" />
          <Input label="Password" placeholder="Minimum 8 characters" />

          <Button label="Login" onPress={() => navigation.navigate('home')} />

          <TextButton
            label={"Don't have account?"}
            subLabel="Sign up here"
            onPress={() => navigation.navigate('signup')}
          />
        </AvoidKeyboard>
      </S.Container>
    </S.SafeArea>
  );
}
