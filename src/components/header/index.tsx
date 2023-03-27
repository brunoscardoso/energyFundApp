import React from 'react';

import * as S from './styles';

export default function Header() {
  return (
    <S.Container>
      <S.TopContainer>
        <S.ProfileButton>
          <S.ProfileIcon />
        </S.ProfileButton>
        <S.TopMidButton>
          <S.Title>Account: $1,457.23</S.Title>
          <S.ArrowDownIcon />
        </S.TopMidButton>
        <S.BellButton>
          <S.BellIcon />
        </S.BellButton>
      </S.TopContainer>

      <S.BottomContainer>
        <S.LeftContainer>
          <S.Label>Portfolio</S.Label>
          <S.BalanceContainer>
            <S.BalanceValue>$1,233.23</S.BalanceValue>
            <S.BalancePercentualContainer>
              <S.PercentualIcon />
              <S.BalancePercentual>31.26%</S.BalancePercentual>
            </S.BalancePercentualContainer>
          </S.BalanceContainer>
        </S.LeftContainer>

        <S.RightContainer>
          <S.RewardsButton>
            <S.RewardsIcon />
            <S.RewardsLabel>Earn Rewards</S.RewardsLabel>
          </S.RewardsButton>
        </S.RightContainer>
      </S.BottomContainer>
    </S.Container>
  );
}
