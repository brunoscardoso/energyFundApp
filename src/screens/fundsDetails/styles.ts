import styled from 'styled-components/native';
import InformationIconSvg from 'assets/information_icon.svg';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export const ScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Title = styled.Text`
  margin: 24px 0 0 16px;
  font-size: 20px;
  font-weight: 600;
`;

export const InfoStatsContainer = styled.View`
  flex-direction: row;
  margin: 16px;
`;

export const LeftContainer = styled.View`
  width: 50%;
`;

export const RightContainer = styled.View``;

export const InfoContainer = styled.View`
  margin: 8px 0;
`;

export const LabelContainer = styled.View`
  align-items: flex-start;
  align-items: center;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const LabelTitle = styled.Text`
  font-size: 16px;
  margin-right: 4px;
  font-weight: 500;
  color: ${({theme}) => theme.palette.gray.secondary};
`;

export const InformationIcon = styled(InformationIconSvg)`
  height: 16px;
  width: 16px;
`;

export const LabelValue = styled.Text`
  font-size: 16px;
`;
