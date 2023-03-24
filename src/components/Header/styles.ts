import styled from 'styled-components/native';
import IconProfileSvg from 'assets/profile_icon.svg';
import IconBellSvg from 'assets/bell_icon.svg';
import IconDownSvg from 'assets/arrow_down_icon.svg';

export const Container = styled.SafeAreaView`
  margin-top: 3%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;

export const BackButton = styled.TouchableOpacity`
  padding-left: 24px;
`;

export const ProfileIcon = styled(IconProfileSvg)`
  height: 24px;
  width: 24px;
`;

export const BellIcon = styled(IconBellSvg)`
  height: 24px;
  width: 24px;
`;

export const ArrowDownIcon = styled(IconDownSvg)`
  height: 24px;
  width: 24px;
`;

export const TopContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
