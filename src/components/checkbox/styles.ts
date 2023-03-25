import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 22px 10px 22px;
`;

export const CheckboxInput = styled.View`
  width: 25px;
  height: 25px;
  border-radius: 4px;
  border-width: 2.5px;
  justify-content: center;
  align-items: center;
  border-color: ${({theme}) => theme.palette.gray.secondary};
  margin-right: 10px;
`;

export const Check = styled.View`
  height: 13px;
  width: 13px;
  border-radius: 1px;
  background-color: ${({theme}) => theme.palette.purple.primary};
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
