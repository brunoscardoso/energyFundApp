import React from 'react';

import {Svg, Polyline} from 'react-native-svg';

import theme from 'themes/colors';

import * as S from './styles';

interface IProps {
  onPress?: () => void;
  title: string;
  type: string;
  value: string;
  positive: boolean;
  percentual: number;
}

export default function FundsCard({
  title,
  type,
  value,
  percentual,
  positive,
  onPress,
}: IProps) {
  return (
    <S.Container onPress={onPress}>
      {type === 'wind' ? (
        <S.WindIcon />
      ) : type === 'solar' ? (
        <S.SolarIcon />
      ) : (
        <S.NaturalIcon />
      )}
      <S.Label>{title}</S.Label>
      <Svg height="100" width="100">
        <Polyline
          points={`${(20 / percentual).toString()}, ${(
            300 / percentual
          ).toString()}, ${(35 / percentual).toString()},${(
            90 / percentual
          ).toString()}, ${(80 / percentual).toString()},${(
            200 / percentual
          ).toString()}, ${(150 / percentual).toString()},${(
            150 / percentual
          ).toString()}, ${(250 / percentual).toString()}, ${(
            300 / percentual
          ).toString()}, ${(1000 / percentual).toString()}, ${(
            200 / percentual
          ).toString()}`}
          fill="none"
          stroke={
            positive ? theme.palette.green.primary : theme.palette.red.secondary
          }
          strokeWidth="3"
        />
      </Svg>

      <S.ValuesContainer>
        <S.LabelValue>{value}</S.LabelValue>
        <S.PercentualContainer>
          {positive ? (
            <S.PercentualPositiveIcon />
          ) : (
            <S.PercentuaNegativeIcon />
          )}
          <S.LabelPercentualValue positive={positive}>
            {percentual}%
          </S.LabelPercentualValue>
        </S.PercentualContainer>
      </S.ValuesContainer>
    </S.Container>
  );
}
