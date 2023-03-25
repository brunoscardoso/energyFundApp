import React from 'react';

import * as S from './styles';

interface IProps {
  onChangeText?: any;
  label: string;
  placeholder?: string;
  value?: any;
  secureTextEntry?: boolean;
}

export default function Input({
  onChangeText,
  label,
  value,
  placeholder,
  secureTextEntry,
}: IProps) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.InputText
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        onChangeText={onChangeText}>
        {value}
      </S.InputText>
    </S.Container>
  );
}
