import React from 'react';

import * as S from './styles';

interface IProps {
  label: string;
  placeholder?: string;
  value?: any;
}

export default function Input({label, value, placeholder}: IProps) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.InputText placeholder={placeholder}>{value}</S.InputText>
    </S.Container>
  );
}
