import styled from 'styled-components/native';
import IconPercentualSvg from 'assets/arrow_up_right.svg';
import IconPercentualNegativeSvg from 'assets/arrow_down_right.svg';

export const Container = styled.View``;

export const BigBoldTitle = styled.Text`
  font-size: 26px;
  font-weight: 600;
`;

export const TopContainer = styled.View`
  margin: 16px;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
`;

export const ValuesContainer = styled.View`
  justify-content: center;
`;

export const PercentualContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LabelPercentualValue = styled.Text<{positive?: boolean}>`
  color: ${({theme, positive}) =>
    positive ? theme.palette.green.primary : theme.palette.red.secondary};
  margin-left: 4px;
  font-size: 16px;
`;

export const PercentualPositiveIcon = styled(IconPercentualSvg)`
  height: 24px;
  width: 24px;
`;

export const PercentuaNegativeIcon = styled(IconPercentualNegativeSvg)`
  height: 24px;
  width: 24px;
`;

export const FloatLabelUp = styled.Text`
  position: absolute;
  font-weight: 500;
  top: 80;
  right: 50;
  color: ${({theme}) => theme.palette.gray.secondary};
`;

export const FloatLabelDown = styled.Text`
  position: absolute;
  font-weight: 500;
  top: 180;
  left: 50;
  color: ${({theme}) => theme.palette.gray.secondary};
`;

export const TimelineList = styled.FlatList``;
