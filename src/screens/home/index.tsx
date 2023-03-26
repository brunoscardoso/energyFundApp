import React from 'react';

import Header from 'components/header';
import FundsCard from 'components/fundsCard';
import Banner from 'components/banner';
import Menu from 'components/menu';

import * as S from './styles';

export default function Home({navigation}) {
  const mockFunds = [
    {
      id: 1,
      title: 'Wind Fund',
      value: '$1032.23',
      percentual: 3.8,
      type: 'wind',
      positive: true,
    },
    {
      id: 2,
      title: 'Solar Fund',
      value: '$986.61',
      percentual: 2.9,
      type: 'solar',
      positive: false,
    },
    {
      id: 3,
      title: 'Natural Fund',
      value: '$1122.13',
      percentual: 5,
      type: 'natural',
      positive: true,
    },
  ];

  const mockBanners = [
    {title: 'Why should you invest here?'},
    {title: 'Why should you invest here?'},
  ];

  return (
    <S.SafeArea>
      <Header />
      <S.Container>
        <S.ScrollView showsVerticalScrollIndicator={false}>
          <S.Title>Funds</S.Title>

          <S.ListContainer>
            <S.ListFunds
              showsHorizontalScrollIndicator={false}
              horizontal
              key={idx => idx}
              data={mockFunds}
              renderItem={({item}) => {
                return (
                  <FundsCard
                    onPress={() => navigation.navigate('fundsDetails', item)}
                    title={item.title}
                    value={item.value}
                    percentual={item.percentual}
                    type={item.type}
                    positive={item.positive}
                  />
                );
              }}
            />
          </S.ListContainer>
          <Banner />

          <S.ListBanners
            showsHorizontalScrollIndicator={false}
            horizontal
            key={idx => idx}
            data={mockBanners}
            renderItem={({item}) => {
              return (
                <S.VerticalBanner>
                  <S.VerticalBannerLabel>{item.title}</S.VerticalBannerLabel>
                </S.VerticalBanner>
              );
            }}
          />
        </S.ScrollView>

        <Menu onPress={() => console.log('navigate')} />
      </S.Container>
    </S.SafeArea>
  );
}
