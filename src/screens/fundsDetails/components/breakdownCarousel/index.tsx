import React, {useState} from 'react';

import * as S from './styles';

export default function BreakdownCarousel({menuItems}) {
  const [selectedMenu, setSelectedMenu] = useState(1);
  const [breakdowns, setBreakdowns] = useState(menuItems[0].items);

  function handleMenu(item) {
    setBreakdowns(item.items);
    setSelectedMenu(item.id);
  }

  return (
    <S.Container>
      <S.MenuList
        key={idx => idx}
        data={menuItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <S.MenuButton
              onPress={() => handleMenu(item)}
              selected={item.id === selectedMenu}>
              <S.MenuLabel selected={item.id === selectedMenu}>
                {item.label}
              </S.MenuLabel>
            </S.MenuButton>
          );
        }}
      />

      <S.BreakdownList
        key={idx => idx}
        data={breakdowns}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <S.BreakdownContainer>
              <S.BreakdownBanner source={item.banner} />
              <S.BreakdownLogo source={item.logo} />
              <S.BreakdownDescription>
                {item.description}
              </S.BreakdownDescription>
              <S.ReadmoreLabel>Read more</S.ReadmoreLabel>
            </S.BreakdownContainer>
          );
        }}
      />
    </S.Container>
  );
}
