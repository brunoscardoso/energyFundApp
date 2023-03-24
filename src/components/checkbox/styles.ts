import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 22px 10px 22px;
`;

export const CheckboxInput = styled.View<{checked?: boolean}>`
  width: 25px;
  height: 25px;
  background-color: ${({checked, theme}) =>
    checked ? theme.palette.purple.primary : 'transparent'};
  border-radius: 4px;
  border-width: 2.5px;
  border-color: ${({theme}) => theme.palette.gray.tertiary};
  margin-right: 10px;
`;

export const LabelContainer = styled.View``;

export const Label = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.palette.gray.primary};
`;

export const LabelUnderline = styled.Text`
  font-size: 14px;
  text-decoration: underline;
  color: ${({theme}) => theme.palette.gray.primary};
`;
