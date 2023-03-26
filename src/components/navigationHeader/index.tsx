import React from 'react';

import * as S from './styles';

interface IProps {
  subTitle: string;
  title: string;
  onPress?: () => void;
}

export default function NavigationHeader({title, subTitle, onPress}: IProps) {
  return (
    <S.Container>
      <S.TopContainer>
        <S.BackButton onPress={onPress}>
          <S.BackIcon />
        </S.BackButton>
        <S.TitleContainer>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{subTitle}</S.SubTitle>
        </S.TitleContainer>
        <S.Empty />
      </S.TopContainer>
      <S.Separator />
    </S.Container>
  );
}
