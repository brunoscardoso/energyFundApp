import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {menuSlice} from 'reduxPath/slices/menuSlice';

import * as S from './styles';

interface IProps {
  onPress?: () => void;
  navigation: any;
}

export default function Menu({onPress, navigation}: IProps) {
  const dispatch = useDispatch();
  const data = useSelector((state: GlobalState) => state.menu);

  function handleMenu(name: string) {
    dispatch(
      menuSlice.actions.setMenu({
        route: name,
      }),
    );
    onPress && onPress();
    navigation.navigate(name);
  }

  return (
    <S.Container>
      <S.Button onPress={() => handleMenu('home')}>
        <S.HomeIcon selected={data.route === 'home'} />
        <S.Label selected={data.route === 'home'}>Home</S.Label>
      </S.Button>

      <S.Button
        onPress={() => {
          handleMenu('trade');
        }}>
        <S.TradeIcon selected={data.route === 'trade'} />
        <S.Label selected={data.route === 'fundsDetails'}>Trade</S.Label>
      </S.Button>

      <S.Button
        onPress={() => {
          handleMenu('portfolio');
        }}>
        <S.PortfolioIcon selected={data.route === 'portfolio'} />
        <S.Label selected={data.route === 'portfolio'}>Portfolio</S.Label>
      </S.Button>
    </S.Container>
  );
}
