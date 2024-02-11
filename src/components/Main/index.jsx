import {useState} from 'react';

import {menu} from '@utils/menu';
import {Menu, MenuItem, Sidebar, SubMenu} from 'react-pro-sidebar';

import {useConfig} from '@hooks/useConfig';

import {
  Container,
  Content,
  LogoContainer,
  LogoImage,
  SidebarContent,
} from './styles';

export const Main = ({children}) => {
  const {menuCollapsed, setMenuCollapsed} = useConfig();

  const [menu_options] = useState(menu);

  const renderMenu = menu => {
    return menu.map((item, index) => {
      if (item.submenu) {
        return (
          <SubMenu key={index} title={item.title}>
            {renderMenu(item.submenu)}
          </SubMenu>
        );
      }
      return (
        <MenuItem key={index} onClick={() => setMenuCollapsed(true)}>
          {item.title}
        </MenuItem>
      );
    });
  };

  return (
    <Container>
      <SidebarContent
        collapsed={menuCollapsed}
        collapsedWidth={0}
        backgroundColor="#fff">
        <LogoContainer>
          <LogoImage />
        </LogoContainer>
        <Menu>{renderMenu(menu_options)}</Menu>
      </SidebarContent>
      <Content>{children}</Content>
    </Container>
  );
};
