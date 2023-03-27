import React, {useState} from 'react';

import * as S from './styles';

interface IProps {
  onPress?: (checked) => void;
  label?: string;
  labelUnderline?: string;
}

export default function Checkbox({label, labelUnderline, onPress}: IProps) {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <S.Container
      onPress={() => {
        setChecked(!checked);
        onPress && onPress(checked);
      }}>
      <S.CheckboxInput>{checked && <S.Check />}</S.CheckboxInput>

      <S.LabelContainer>
        <S.Label>{label}</S.Label>
        <S.LabelUnderline>{labelUnderline}</S.LabelUnderline>
      </S.LabelContainer>
    </S.Container>
  );
}
