import React from 'react';

import * as S from './styles';

export default function Banner() {
  return (
    <S.Container>
      <S.TextContainer>
        <S.Title>Learn more about carbon credits</S.Title>
        <S.Subtitle>Check out our top tips!</S.Subtitle>
      </S.TextContainer>

      <S.StatisticsBanner />
    </S.Container>
  );
}
