import React from 'react';

import * as S from './styles';

interface IProps {
  label: string;
  onPress: () => void;
}

export default function Input({label, onPress}: IProps) {
  return (
    <S.Container>
      <S.Touchable onPress={onPress}>
        <S.Label>{label}</S.Label>
      </S.Touchable>
    </S.Container>
  );
}
