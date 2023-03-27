import React, {useState} from 'react';

import {useDispatch} from 'react-redux';

import Input from 'components/input';
import Button from 'components/button';
import AvoidKeyboard from 'components/avoidKeyboard';
import TextButton from 'screens/onboarding/components/textButton';
import Header from 'screens/onboarding/components/header';
import Loader from 'components/loader';

import {userSlice} from 'reduxPath/slices/userSlice';
import sleep from 'utils/sleep';

import * as S from './styles';

export default function Login({navigation}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const dispatch = useDispatch();

  async function handleLogin() {
    setLoading(true);
    // SIMULATE API
    await sleep(3000);
    // LOGIN
    // const loginResponse = await axios.post('/login', {
    //   email,
    //   password,
    // });

    // GET USER DATA
    // const userResponse = await axios.get('/userData');

    const userResponse = {
      firstName: 'John',
      lastName: 'Smith',
      email: 'john@doe.com',
    };

    dispatch(
      userSlice.actions.setUser({
        firstName: userResponse.firstName,
        lastName: userResponse.lastName,
        email: userResponse.email,
      }),
    );

    setLoading(false);

    navigation.navigate('home');
  }

  return (
    <S.SafeArea>
      <Loader loading={loading} />
      <S.Container>
        <Header title="Login" />

        <AvoidKeyboard>
          <Input
            label="E-mail"
            placeholder="Enter your e-mail"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            label="Password"
            placeholder="Minimum 8 characters"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <Button label="Login" onPress={() => handleLogin()} />

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
