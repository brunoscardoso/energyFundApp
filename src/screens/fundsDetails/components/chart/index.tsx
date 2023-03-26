import React, {useState} from 'react';
import {Svg, Polyline} from 'react-native-svg';

import theme from 'themes/colors';
import * as S from './styles';

interface IProps {
  percentual: number;
  positive: boolean;
  value: number;
}

export default function Chart({percentual: percent, value, positive}: IProps) {
  const [selected, setSelected] = useState(2);
  const [percentual, setPercentual] = useState(percent);

  // the logical is incorrect, but this is one way to simulate the mock data
  // on real scenario this updated data is returned the backend

  const timeline = [
    {id: 1, label: '1h', updatedPercentual: 2.7},
    {id: 2, label: '1d', updatedPercentual: 3.3},
    {id: 3, label: '1w', updatedPercentual: 3.9},
    {id: 4, label: '1m', updatedPercentual: 2.8},
    {id: 5, label: '1y', updatedPercentual: 4.1},
    {id: 6, label: 'All', updatedPercentual: 3.2},
  ];

  function convert(number) {
    return (number / percentual).toString();
  }

  function handleSelectTimeline(item) {
    setSelected(item.id);
    setPercentual(item.updatedPercentual);
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
      <Svg height="150" width="700">
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

      <S.TimelineList
        key={idx => idx}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={timeline}
        renderItem={({item}) => {
          return (
            <S.TimelineButton
              onPress={() => handleSelectTimeline(item)}
              selected={item.id === selected}>
              <S.TimelineLabel selected={item.id === selected}>
                {item.label}
              </S.TimelineLabel>
            </S.TimelineButton>
          );
        }}
      />
    </S.Container>
  );
}
