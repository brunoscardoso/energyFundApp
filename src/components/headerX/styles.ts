import styled from 'styled-components/native';
import IconProfileSvg from 'assets/profile_icon.svg';
import IconBellSvg from 'assets/bell_icon.svg';
import IconDownSvg from 'assets/arrow_down_icon.svg';
import IconRewardSvg from 'assets/reward_icon.svg';
import IconPercentualSvg from 'assets/arrow_up_right.svg';

export const Container = styled.SafeAreaView`
  height: 20%;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-color: ${({theme}) => theme.palette.gray.secondary};
  border-bottom-width: 0.5px;
`;

export const Title = styled.Text`
  font-size: 17px;
  margin-right: 4px;
  font-weight: 600;
`;

export const BackButton = styled.TouchableOpacity`
  padding-left: 24px;
`;

export const ProfileButton = styled.TouchableOpacity``;

export const ProfileIcon = styled(IconProfileSvg)`
  height: 24px;
  width: 24px;
`;

export const BellButton = styled.TouchableOpacity``;

export const BellIcon = styled(IconBellSvg)`
  height: 24px;
  width: 24px;
`;

export const ArrowDownIcon = styled(IconDownSvg)`
  height: 16px;
  width: 16px;
`;

export const TopMidButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TopContainer = styled.View`
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BottomContainer = styled.View`
  margin-top: 12px;
  width: 100%;
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LeftContainer = styled.View``;

export const RightContainer = styled.View``;

export const Label = styled.Text`
  font-size: 12px;
  margin-bottom: 4px;
`;

export const BalanceContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const BalanceValue = styled.Text`
  margin-right: 4px;
  font-size: 24px;
  font-weight: bold;
`;

export const BalancePercentualContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PercentualIcon = styled(IconPercentualSvg)`
  margin-right: 4px;
`;

export const BalancePercentual = styled.Text`
  font-size: 15px;
  color: ${({theme}) => theme.palette.green.primary};
`;

export const RewardsButton = styled.TouchableOpacity`
  height: 35px;
  width: 120px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background-color: ${({theme}) => theme.palette.purple.secondary};
`;

export const RewardsIcon = styled(IconRewardSvg)`
  width: 14px;
  height: 14px;
  margin-right: 4px;
`;

export const RewardsLabel = styled.Text`
  font-weight: 500;
  font-size: 12px;
  color: ${({theme}) => theme.palette.purple.primary};
`;
