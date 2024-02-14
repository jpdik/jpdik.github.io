import {menu} from '@utils/menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Menu, MenuItem, SubMenu} from 'react-pro-sidebar';

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
        <MenuItem
          key={index}
          component={
            <AnchorLink
              offset={() => item.offset}
              href={item.link}
              onClick={() => setMenuCollapsed(true)}
            />
          }>
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
        <Menu>{renderMenu(menu)}</Menu>
      </SidebarContent>
      <Content>{children}</Content>
    </Container>
  );
};
