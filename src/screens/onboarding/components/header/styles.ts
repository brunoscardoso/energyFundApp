import styled from 'styled-components/native';
import IconLeftSvg from 'assets/icon_left.svg';

export const Container = styled.SafeAreaView`
  margin-top: 10%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: 16px;
  font-size: 18px;
  font-weight: 600;
`;

export const Separator = styled.View`
  border-top-width: 1px;
  width: 100%;
  border-color: ${({theme}) => theme.palette.gray.tertiary};
`;

export const BackButton = styled.TouchableOpacity`
  padding-left: 24px;
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

export const StepsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  padding: 8px;
`;

export const Steps = styled.View<{onStep?: boolean}>`
  border-radius: 4px;
  margin: 0 3px;
  width: 50px;
  height: 5px;
  background-color: ${({theme, onStep}) =>
    onStep ? theme.palette.purple.primary : theme.palette.gray.tertiary};
`;

export const Empty = styled.View`
  width: 24px;
  margin-right: 24px;
`;
