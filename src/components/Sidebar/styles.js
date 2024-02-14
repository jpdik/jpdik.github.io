import {Sidebar} from 'react-pro-sidebar';
import styled from 'styled-components';

import LogoH from '@assets/home/logo_horizontal.svg?react';

export const SidebarContent = styled(Sidebar)`
  border-right-width: ${props => (props.collapsed ? '0px' : '1px')} !important;
  border-color: var(--main) !important;

  position: fixed !important;

  height: 100%;
  z-index: 1000;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin: 10px 0;
`;

export const LogoImage = styled(LogoH)`
  height: 60px;

  color: white;

  border: 1px solid gray;
  border-radius: 20px;
`;

export const LanguageContent = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
`;

export const LanguageItem = styled.img`
  width: 50px;
  height: 35px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 8px;
  filter: grayscale(${props => (props.$selected ? 0 : 1)});
`;
