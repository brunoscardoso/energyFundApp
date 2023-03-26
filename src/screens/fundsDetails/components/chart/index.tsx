import React from 'react';
import {Svg, Polyline} from 'react-native-svg';

import theme from 'themes/colors';
import * as S from './styles';

interface IProps {
  percentual: number;
  positive: boolean;
  value: number;
}

export default function Chart({percentual, value, positive}: IProps) {
  function convert(number) {
    return (number / percentual).toString();
  }

  return (
    <S.Container>
      <S.TopContainer>
        <S.ValuesContainer>
          <S.BigBoldTitle>${value}</S.BigBoldTitle>
          <S.PercentualContainer>
            {positive ? (
              <S.PercentualPositiveIcon />
            ) : (
              <S.PercentuaNegativeIcon />
            )}
            <S.LabelPercentualValue positive={positive}>{`${percentual}% ($${(
              value / 1000
            ).toFixed(2)})`}</S.LabelPercentualValue>
          </S.PercentualContainer>
        </S.ValuesContainer>

        <S.BigBoldTitle>2022</S.BigBoldTitle>
      </S.TopContainer>
      <S.FloatLabelDown>$17.66</S.FloatLabelDown>
      <S.FloatLabelUp>$19.02</S.FloatLabelUp>
      <Svg>
        <Polyline
          points={`1, ${convert(200)}, 30, ${convert(130)}, 80, ${convert(
            230,
          )}, 100, ${convert(140)}, 150, ${convert(230)}, 180, ${convert(
            80,
          )}, 190, ${convert(90)}, 230, ${convert(180)}, 300, ${convert(
            180,
          )}, 320, ${convert(250)}, 390, ${convert(100)}`}
          fill="none"
          stroke={
            positive ? theme.palette.green.primary : theme.palette.red.secondary
          }
          strokeWidth="3"
        />
      </Svg>
    </S.Container>
  );
}
