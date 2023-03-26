import React from 'react';

import NavigationHeader from 'components/navigationHeader';

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
      <S.Container>
        <Chart
          percentual={params.percentual}
          positive={params.positive}
          value={params.value}
        />
      </S.Container>
    </S.SafeAreaView>
  );
}
