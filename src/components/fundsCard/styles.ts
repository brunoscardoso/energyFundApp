import styled from 'styled-components/native';
import IconPercentualSvg from 'assets/arrow_up_right.svg';
import IconPercentualNegativeSvg from 'assets/arrow_down_right.svg';
import IconWindSvg from 'assets/wind_icon.svg';
import IconSolarSvg from 'assets/solar_icon.svg';
import IconNaturalSvg from 'assets/natural_icon.svg';

export const Container = styled.TouchableOpacity`
  width: 150px;
  height: 180px;
  margin-right: 8px;
  justify-content: center;
  padding: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({theme}) => theme.palette.gray.tertiary};
`;

export const WindIcon = styled(IconWindSvg)``;

export const SolarIcon = styled(IconSolarSvg)``;

export const NaturalIcon = styled(IconNaturalSvg)``;

export const Label = styled.Text`
  font-weight: 500;
  margin-top: 8px;
`;

export const LabelValue = styled.Text`
  font-size: 16px;
  font-weight: 200;
`;

export const ValuesContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PercentualContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LabelPercentualValue = styled.Text<{positive?: boolean}>`
  color: ${({theme, positive}) =>
    positive ? theme.palette.green.primary : theme.palette.red.secondary};
  margin-left: 4px;
`;

export const PercentualPositiveIcon = styled(IconPercentualSvg)``;

export const PercentuaNegativeIcon = styled(IconPercentualNegativeSvg)``;
