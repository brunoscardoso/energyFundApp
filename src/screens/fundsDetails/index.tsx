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
        </S.Container>
      </S.ScrollView>

      <Menu navigation={navigation} />
    </S.SafeAreaView>
  );
}
