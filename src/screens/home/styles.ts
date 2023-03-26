import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export const Container = styled.View`
  flex: 1;
  margin: 0 16px;
  background-color: white;
`;

export const ScrollView = styled.ScrollView``;

export const Title = styled.Text`
  margin: 16px 0;
  font-size: 18px;
  font-weight: 500;
`;

export const ListContainer = styled.View`
  width: 100%;
  height: 200px;
`;

export const ListFunds = styled.FlatList``;

export const ListBanners = styled.FlatList`
  margin-top: 16px;
`;

export const VerticalBanner = styled.TouchableOpacity`
  width: ${width / 2.3}px;
  height: 200px;
  margin-right: 16px;
  border-radius: 16px;
  background-color: ${({theme}) => theme.palette.gray.tertiary};
`;

export const VerticalBannerLabel = styled.Text`
  margin: 16px;
  font-size: 15px;
  font-weight: 500;
`;
