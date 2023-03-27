import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 16px;
`;

export const MenuList = styled.FlatList``;

export const MenuButton = styled.TouchableOpacity<{selected?: boolean}>`
  margin-right: 12px;
  border-bottom-width: 2.5px;
  border-color: ${({theme, selected}) =>
    selected ? theme.palette.purple.primary : 'transparent'};
`;

export const MenuLabel = styled.Text<{selected?: boolean}>`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 6px;
  color: ${({selected, theme}) =>
    selected ? theme.palette.dark.primary : theme.palette.gray.secondary};
`;

export const BreakdownList = styled.FlatList``;

export const BreakdownContainer = styled.TouchableOpacity`
  margin: 16px 16px 0 0;
  height: 270px;
  width: 220px;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({theme}) => theme.palette.gray.secondary};
`;

export const BreakdownBanner = styled.Image`
  height: 106px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const BreakdownLogo = styled.Image`
  margin: 8px;
`;

export const BreakdownDescription = styled.Text`
  margin: 8px;
`;

export const ReadmoreLabel = styled.Text`
  text-decoration: underline;
  margin: 8px;
`;
