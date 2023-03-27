import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  padding: 10px 22px 10px 22px;
`;

export const Label = styled.Text`
  margin-bottom: 6px;
  color: ${({theme}) => theme.palette.gray.primary};
`;

export const InputText = styled.TextInput`
  background-color: ${({theme}) => theme.palette.gray.tertiary};
  padding: 8px;
  font-size: 16px;
  border-radius: 6px;
  height: 50px;
  width: 100%;
`;
