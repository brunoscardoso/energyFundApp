import styled from 'styled-components/native';
import PortfolioIconSvg from 'assets/portfolio_menu_icon.svg';
import IconPercentualSvg from 'assets/arrow_up_right.svg';

export const Container = styled.View`
  margin: 16px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;

export const PortfolioIcon = styled(PortfolioIconSvg).attrs({
  fill: 'black',
})`
  height: 24px;
  width: 24px;
`;

export const ValueContainer = styled.View``;

export const ValueText = styled.Text`
  align-self: flex-end;
  font-size: 24px;
  font-weight: 600;
`;

export const LabelPercentualValue = styled.Text`
  color: ${({theme}) => theme.palette.green.primary};
  margin-left: 4px;
`;

export const PercentualContainer = styled.View`
  margin-top: 4px;
  align-items: center;
  flex-direction: row;
`;

export const PercentualPositiveIcon = styled(IconPercentualSvg)``;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DescriptionText = styled.Text`
  font-size: 14px;
  margin-top: 4px;
  color: ${({theme}) => theme.palette.gray.secondary};
`;

export const ButtonContainer = styled.View`
  margin: 16px 0;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity<{colored?: boolean}>`
  justify-content: center;
  align-items: center;
  background-color: ${({theme, colored}) =>
    colored ? theme.palette.green.primary : 'transparent'};
  border-radius: 4px;
  border-width: ${({colored}) => (!colored ? 1 : 0)}px;
  border-color: ${({theme}) => theme.palette.gray.secondary};
  height: 55px;
  width: 50%;
`;

export const ButtonLabel = styled.Text<{colored?: boolean}>`
  font-weight: 600;
  color: ${({theme, colored}) =>
    colored ? theme.palette.light.primary : theme.palette.purple.primary};
  font-size: 17px;
`;

export const WarningContainer = styled.View`
  margin: 16px 0;
  padding: 8px;
  width: 100%;
  background-color: ${({theme}) => theme.palette.gray.tertiary};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;
