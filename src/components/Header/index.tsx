import React from 'react';

import * as S from './styles';

interface IProps {
  totalSteps?: number;
  title: string;
}

export default function Header({title, totalSteps = 0}: IProps) {
  let steps: any = [];
  for (let i = 0; i < totalSteps; i++) {
    steps.push(i);
  }

  return (
    <S.Container>
      {totalSteps >= 1 && (
        <S.TopContainer>
          <S.BackButton>
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
