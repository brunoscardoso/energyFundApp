import styled from 'styled-components/native';

export const Touchable = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  height: 50px;
  width: 100%;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.palette.gray.primary};
`;

export const LabelUnderline = styled.Text`
  font-size: 14px;
  text-decoration: underline;
  color: ${({theme}) => theme.palette.gray.primary};
`;
