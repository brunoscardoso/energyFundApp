import React from 'react';

import Header from 'components/header';

import FundsCard from 'components/fundsCard';

import * as S from './styles';

export default function Home() {
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
      percentual: 3.5,
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

  return (
    <S.SafeArea>
      <Header />
      <S.Container>
        <S.Title>Funds</S.Title>

        <S.ListFunds
          horizontal
          key={idx => idx}
          data={mockFunds}
          renderItem={({item}) => {
            return (
              <FundsCard
                title={item.title}
                value={item.value}
                percentual={item.percentual}
                type={item.type}
                positive={item.positive}
              />
            );
          }}
        />
      </S.Container>
    </S.SafeArea>
  );
}
