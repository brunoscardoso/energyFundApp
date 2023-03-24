import React from 'react';

import * as S from './styles';

export default function Header() {
  return (
    <S.Container>
      <S.TopContainer>
        <S.ProfileIcon />
        <S.Title>Account: $1,457.23</S.Title>
        <S.BellIcon />
      </S.TopContainer>
    </S.Container>
  );
}
