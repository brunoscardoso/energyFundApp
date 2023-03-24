import React from 'react';

import * as S from './styles';

interface IProps {
  totalSteps?: number;
  title: string;
  onPress?: () => void;
}

export default function Header({title, totalSteps = 0, onPress}: IProps) {
  let steps: any = [];
  for (let i = 0; i < totalSteps; i++) {
    steps.push(i);
  }

  return (
    <S.Container>
      {totalSteps >= 1 && (
        <S.TopContainer>
          <S.BackButton onPress={onPress}>
            <S.BackIcon />
          </S.BackButton>
          <S.StepsContainer>
            {steps.map((step: any, idx: number) => {
              return <S.Steps key={idx} onStep={!step} />;
            })}
          </S.StepsContainer>
          <S.Empty />
        </S.TopContainer>
      )}
      <S.Separator />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
