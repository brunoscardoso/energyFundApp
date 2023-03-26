import React, {useState} from 'react';

import * as S from './styles';

interface IProps {
  onPress: () => void;
}

export default function Menu({onPress}: IProps) {
  const [homeSelected, setHomeSelected] = useState<boolean>(true);
  const [tradeSelected, setTradeSelected] = useState<boolean>(false);
  const [portfolioSelected, setPortfolioSelected] = useState<boolean>(false);

  return (
    <S.Container>
      <S.Button
        onPress={() => {
          setHomeSelected(true);
          setTradeSelected(false);
          setPortfolioSelected(false);
          onPress();
        }}>
        <S.HomeIcon selected={homeSelected} />
        <S.Label selected={homeSelected}>Home</S.Label>
      </S.Button>

      <S.Button
        onPress={() => {
          setTradeSelected(true);
          setHomeSelected(false);
          setPortfolioSelected(false);
          onPress();
        }}>
        <S.TradeIcon selected={tradeSelected} />
        <S.Label selected={tradeSelected}>Trade</S.Label>
      </S.Button>

      <S.Button
        onPress={() => {
          setPortfolioSelected(true);
          setHomeSelected(false);
          setTradeSelected(false);
          onPress();
        }}>
        <S.PortfolioIcon selected={portfolioSelected} />
        <S.Label selected={portfolioSelected}>Portfolio</S.Label>
      </S.Button>
    </S.Container>
  );
}
