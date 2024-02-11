import {Sidebar} from 'react-pro-sidebar';
import styled from 'styled-components';

import LogoH from '@assets/home/logo_horizontal.svg?react';

export const Container = styled.div`
  display: flex;
`;

export const SidebarContent = styled(Sidebar)`
  border-right-width: ${props => (props.collapsed ? '0px' : '1px')} !important;
  border-color: var(--main) !important;

  position: fixed !important;

  height: 100%;
  z-index: 1000;
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  position: relative;
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
