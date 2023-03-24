import React from 'react';

import Header from 'components/header';

import * as S from './styles';

export default function Home() {
  return (
    <S.SafeArea>
      <Header />
      <S.Container />
    </S.SafeArea>
  );
}
