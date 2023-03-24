import React from 'react';

import * as S from './styles';

interface IProps {
  label: string;
  subLabel: string;
  onPress: () => void;
}

export default function TextButton({label, subLabel, onPress}: IProps) {
  return (
    <S.Touchable onPress={onPress}>
      <S.Label>{label} </S.Label>
      <S.LabelUnderline>{subLabel}</S.LabelUnderline>
    </S.Touchable>
  );
}
