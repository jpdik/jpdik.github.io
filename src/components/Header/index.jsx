import {useEffect, useState} from 'react';

import {faBars, faClose, faCoffee} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import {useConfig} from '@hooks/useConfig';

import {
  Container,
  HeaderIN,
  LogoContaniner,
  LogoImage,
  MenuButton,
  MenuContainer,
} from './styles';

export const Header = () => {
  const {menuCollapsed, setMenuCollapsed} = useConfig();

  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let offset = window.scrollY;
      setAnimateHeader(offset > 280 ? true : false);
    });

    return window.removeEventListener('scroll', () => {});
  }, []);

  return (
    <Container>
      <HeaderIN>
        <LogoContaniner>
          <AnchorLink href="#home">
            <LogoImage $animateHeader={animateHeader} />
          </AnchorLink>
        </LogoContaniner>
        <MenuContainer>
          <MenuButton onClick={() => setMenuCollapsed(!menuCollapsed)}>
            <FontAwesomeIcon
              color="white"
              icon={menuCollapsed ? faBars : faClose}
              size="lg"
            />
          </MenuButton>
        </MenuContainer>
      </HeaderIN>
    </Container>
  );
};
