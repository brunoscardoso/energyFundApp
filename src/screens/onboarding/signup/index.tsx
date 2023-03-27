import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import Input from 'components/inputX';
import Button from 'components/button';
import Checkbox from 'components/checkbox';
import AvoidKeyboard from 'components/avoidKeyboard';
import Header from 'screens/onboarding/components/header';
import TextButton from 'screens/onboarding/components/textButton';

import sleep from 'utils/sleep';
import Loader from 'components/loader';

import {userSlice} from 'reduxPath/slices/userSlice';

import * as S from './styles';

export default function SignUp({navigation}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [terms, setTerms] = useState<boolean>(false);

  const dispatch = useDispatch();

  async function handleSignup() {
    setLoading(true);
    // SIMULATE API
    await sleep(3000);
    // const response = await axios.post('/create-user', {
    //   firstName,
    //   lastName,
    //   email,
    //   password,
    //   terms,
    // });

    setLoading(false);

    dispatch(
      userSlice.actions.setUser({
        firstName,
        lastName,
        email,
      }),
    );

    navigation.navigate('home');
  }

  return (
    <S.SafeArea>
      <Loader loading={loading} />

      <Header
        title="Login"
        totalSteps={3}
        onPress={() => navigation.goBack()}
      />

      <AvoidKeyboard>
        <Input
          label="First Name"
          placeholder="Type your name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <Input
          label="Last Name"
          placeholder="Type your last name"
          value={lastName}
          onChangeText={setLastName}
        />
        <Input
          label="E-mail"
          placeholder="Type your email"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          label="Password"
          placeholder="Minimum 8 characters"
          value={password}
          onChangeText={setPassword}
        />

        <Checkbox
          label="I am over 18 years of age and I have read and agree to the"
          labelUnderline="Terms of Service and Privacy policy"
        />

        <Button label="Create account" onPress={() => handleSignup()} />

        <TextButton
          label={'Already have an account?'}
          subLabel="Login in here"
          onPress={() => navigation.navigate('login')}
        />
      </AvoidKeyboard>
    </S.SafeArea>
  );
}
