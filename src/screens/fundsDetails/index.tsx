import React from 'react';

import NavigationHeader from 'components/navigationHeader';
import Menu from 'components/menu';

import * as S from './styles';
import Chart from './components/chart';
import BreakdownCarousel from './components/breakdownCarousel';
import Portfolio from './components/portfolio';

export default function FundsDetails({route: {params}, navigation}: any) {
  const menuItems = [
    {
      id: 1,
      label: 'Highlighted',
      items: [
        {
          id: 1,
          title: 'Aspira',
          description:
            'Aspira is building a modular, direct air capture system with the energy supply integrated into the modules',
          logo: require('assets/aspira_logo.png'),
          banner: require('assets/aspira_banner.png'),
        },
        {
          id: 2,
          title: 'Climeworks',
          description:
            'uses renewable geothermal energy and waste heat to capture CO₂ directly from the air.',
          logo: require('assets/climeworks_logo.png'),
          banner: require('assets/climeworks_banner.png'),
        },
      ],
    },
    {
      id: 2,
      label: 'Value',
      items: [
        {
          id: 1,
          title: 'Aspira',
          description:
            'Aspira is building a modular, direct air capture system with the energy supply integrated into the modules',
          logo: require('assets/aspira_logo.png'),
          banner: require('assets/aspira_banner.png'),
        },
      ],
    },
    {
      id: 3,
      label: 'Vintage',
    },
    {
      id: 4,
      label: 'Registry',
    },
  ];

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

          <S.Title>Info & Stats</S.Title>
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

          <S.Title>Fund Breakdown</S.Title>
          <BreakdownCarousel menuItems={menuItems} />

          <Portfolio />
        </S.Container>
      </S.ScrollView>

      <Menu navigation={navigation} />
    </S.SafeAreaView>
  );
}
