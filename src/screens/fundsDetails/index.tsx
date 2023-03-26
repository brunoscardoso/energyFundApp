import React from 'react';

import NavigationHeader from 'components/navigationHeader';

import * as S from './styles';

export default function FundsDetails({route: {params}, navigation}: any) {
  return (
    <S.SafeAreaView>
      <NavigationHeader
        title={params.title}
        subTitle={params.title}
        onPress={() => navigation.goBack()}
      />
      <S.Container />
    </S.SafeAreaView>
  );
}
