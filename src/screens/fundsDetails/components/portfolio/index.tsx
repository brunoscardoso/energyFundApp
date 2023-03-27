import React from 'react';

import Button from 'components/button';

import * as S from './styles';

export default function Portfolio() {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.PortfolioIcon />
        <S.Title>Your Portfolio</S.Title>
      </S.TitleContainer>
      <S.RowContainer>
        <S.ValueContainer>
          <S.ValueText>18 credits</S.ValueText>
          <S.PercentualContainer>
            <S.PercentualPositiveIcon />
            <S.LabelPercentualValue>8.41%</S.LabelPercentualValue>
          </S.PercentualContainer>
        </S.ValueContainer>
        <S.ValueContainer>
          <S.ValueText>$328.14</S.ValueText>
          <S.DescriptionText>Last purchase 28d ago</S.DescriptionText>
        </S.ValueContainer>
      </S.RowContainer>

      <S.ButtonContainer>
        <S.Button style={{marginRight: 4}} colored={false}>
          <S.ButtonLabel colored={false}>Sell</S.ButtonLabel>
        </S.Button>

        <S.Button style={{marginLeft: 4}} colored={true}>
          <S.ButtonLabel colored={true}>Retire credits</S.ButtonLabel>
        </S.Button>
      </S.ButtonContainer>

      <S.DescriptionText style={{fontSize: 12}}>
        You’ve previously retired 28 credits of this asset
      </S.DescriptionText>

      <S.WarningContainer>
        <S.DescriptionText style={{fontSize: 12}}>
          Please note that prices are for reference only and may vary at the
          time of excecuting a buy or sell order. The information provided is
          not investment advice, and should not be used as a recommendation to
          buy or sell assets.
        </S.DescriptionText>
      </S.WarningContainer>

      <Button label="Buy" onPress={() => console.log('buy')} />
    </S.Container>
  );
}
