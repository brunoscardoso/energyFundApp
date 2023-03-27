import React from 'react';

import NavigationHeader from 'components/navigationHeader';
import Menu from 'components/menu';

import * as S from './styles';
import Chart from './components/chart';

export default function FundsDetails({route: {params}, navigation}: any) {
  return (
    <S.SafeAreaView>
      <NavigationHeader
        title={params.title}
        subTitle={params.title}
        onPress={() => navigation.goBack()}
      />

      <S.ScrollView>
        <S.Container>
          <Chart
            percentual={params.percentual}
            positive={params.positive}
            value={params.value}
          />

          <S.InfoStatsTitle>Info & Stats</S.InfoStatsTitle>
          <S.InfoStatsContainer>
            <S.LeftContainer>
              <S.InfoContainer>
                <S.LabelContainer>
                  <S.LabelTitle>AUM</S.LabelTitle>
                  <S.InformationIcon />
                </S.LabelContainer>
                <S.LabelValue>{params.infoStats.aum}</S.LabelValue>
              </S.InfoContainer>

              <S.InfoContainer>
                <S.LabelContainer>
                  <S.LabelTitle>Vintage Range</S.LabelTitle>
                  <S.InformationIcon />
                </S.LabelContainer>
                <S.LabelValue>{params.infoStats.vintageRange}</S.LabelValue>
              </S.InfoContainer>

              <S.InfoContainer>
                <S.LabelContainer>
                  <S.LabelTitle>Price at Close</S.LabelTitle>
                  <S.InformationIcon />
                </S.LabelContainer>
                <S.LabelValue>{params.infoStats.priceAtClose}</S.LabelValue>
              </S.InfoContainer>
            </S.LeftContainer>

            <S.RightContainer>
              <S.InfoContainer>
                <S.LabelContainer>
                  <S.LabelTitle>Issue Date</S.LabelTitle>
                  <S.InformationIcon />
                </S.LabelContainer>
                <S.LabelValue>{params.infoStats.issueDate}</S.LabelValue>
              </S.InfoContainer>

              <S.InfoContainer>
                <S.LabelContainer>
                  <S.LabelTitle>TER</S.LabelTitle>
                  <S.InformationIcon />
                </S.LabelContainer>
                <S.LabelValue>{params.infoStats.ter}</S.LabelValue>
              </S.InfoContainer>

              <S.InfoContainer>
                <S.LabelContainer>
                  <S.LabelTitle>Price at Open</S.LabelTitle>
                  <S.InformationIcon />
                </S.LabelContainer>
                <S.LabelValue>{params.infoStats.priceAtOpen}</S.LabelValue>
              </S.InfoContainer>
            </S.RightContainer>
          </S.InfoStatsContainer>
        </S.Container>
      </S.ScrollView>

      <Menu navigation={navigation} />
    </S.SafeAreaView>
  );
}
