import styled from 'styled-components/native';
import IconLeftSvg from 'assets/icon_left.svg';

export const Container = styled.SafeAreaView`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;

export const SubTitle = styled.Text`
  margin-top: 2px;
  font-size: 18px;
  color: ${({theme}) => theme.palette.gray.secondary};
  font-weight: 300;
`;

export const Separator = styled.View`
  margin-top: 8px;
  border-top-width: 1px;
  width: 100%;
  border-color: ${({theme}) => theme.palette.gray.tertiary};
`;

export const BackButton = styled.TouchableOpacity`
  padding-left: 24px;
  justify-content: center;
`;

export const BackIcon = styled(IconLeftSvg)`
  height: 24px;
  width: 24px;
`;

export const TopContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const TitleContainer = styled.View`
  align-items: center;
`;

export const Empty = styled.View`
  width: 24px;
  margin-right: 24px;
`;
