import React, {useState} from 'react';

import * as S from './styles';

interface IProps {
  checked?: boolean;
  label?: string;
  labelUnderline?: string;
}

export default function Checkbox({label, labelUnderline}: IProps) {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <S.Container onPress={() => setChecked(!checked)}>
      <S.CheckboxInput checked={checked} />

      <S.LabelContainer>
        <S.Label>{label}</S.Label>
        <S.LabelUnderline>{labelUnderline}</S.LabelUnderline>
      </S.LabelContainer>
    </S.Container>
  );
}
