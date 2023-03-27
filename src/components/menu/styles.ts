import styled from 'styled-components/native';
import HomeMenuSvg from 'assets/home_menu_icon.svg';
import PortfolioMenuSvg from 'assets/portfolio_menu_icon.svg';
import TradeMenuSvg from 'assets/trade_menu_icon.svg';

export const Container = styled.View`
  height: 80px;
  width: 100%;
  position: absolute;
  bottom: 0;
  flex-direction: row;
  background-color: white;
  justify-content: space-around;
  margin-bottom: 12px;
`;

export const Button = styled.TouchableOpacity`
  padding: 8px;
  align-items: center;
`;

export const Label = styled.Text<{selected?: boolean}>`
  font-weight: ${({selected}) => (selected ? 100 : 400)};
`;

export const HomeIcon = styled(HomeMenuSvg).attrs(({theme, selected}) => ({
  fill: selected ? theme.palette.purple.primary : theme.palette.dark.primary,
}))`
  height: 28px;
  width: 28px;
`;

export const PortfolioIcon = styled(PortfolioMenuSvg).attrs(
  ({theme, selected}) => ({
    fill: selected ? theme.palette.purple.primary : theme.palette.dark.primary,
  }),
)`
  height: 28px;
  width: 28px;
`;

export const TradeIcon = styled(TradeMenuSvg).attrs(({theme, selected}) => ({
  fill: selected ? theme.palette.purple.primary : theme.palette.dark.primary,
}))`
  height: 28px;
  width: 28px;
`;
