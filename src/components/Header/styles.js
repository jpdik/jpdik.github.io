import {device} from '@utils/media_query';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled, {css} from 'styled-components';

import LogoH from '@assets/home/logo_horizontal.svg?react';

export const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 10;
  border-bottom: 1px solid rgba(0, 139, 248, 0.2);

  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

  background-color: var(--background);

  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderIN = styled.div`
  width: 100%;
  height: 60px;
  clear: both;
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 1600px;
`;

export const LogoContaniner = styled.div`
  height: 50px;
  margin-right: 100px;
`;

export const LogoImage = styled(LogoH)`
  height: 50px;

  color: white;

  opacity: ${props => (props.$animateHeader ? '1' : '0')};

  transition: opacity 0.3s ease;
`;

export const AnchorNav = styled.ul`
  margin: 0px;
  list-style-type: none;
  display: flex;
`;

export const AnchorOption = styled.li`
  margin: 0px 45px 0px 0px;

  ${props => {
    if (props.$current) {
      return css`
        position: relative;
        transition: 1s all;

        &::after {
          content: '';
          width: 100%;
          height: 3px;
          background: var(--extra-color);
          position: absolute;
          bottom: -1px;
          left: 0;
          transition: 1s all;
          display: block;
        }
      `;
    }
  }}
`;

export const LinkAnchor = styled(AnchorLink)`
  font-size: 16px;
  color: ${props => (props.$current ? 'var(--extra-color);' : '#000')};
  display: inline-block;
  padding: 21px 0px 25px 0px;
  transition: all 0.3s ease;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

export const MenuButton = styled.div`
  display: flex;
  width: 40px;
  height: 40px;

  cursor: pointer;

  align-items: center;
  justify-content: center;

  border: 1px solid white;
  border-radius: 5px;
`;
