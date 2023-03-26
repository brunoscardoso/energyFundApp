import styled from 'styled-components/native';
import StatisticsSvg from 'assets/statistics_banner.svg';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 130px;
  border-radius: 16px;
  background-color: ${({theme}) => theme.palette.purple.primary};
  justify-content: space-between;
  flex-direction: row;
  padding: 16px;
`;

export const TextContainer = styled.View`
  width: 60%;
  height: 80px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: white;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: 300;
  color: white;
`;

export const StatisticsBanner = styled(StatisticsSvg)``;
