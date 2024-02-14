import {useCallback, useEffect} from 'react';

import {DEFAULT_LOCALE, languages} from '@locale/i18n';
import {menu} from '@utils/menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {useTranslation} from 'react-i18next';
import {Menu, MenuItem, SubMenu} from 'react-pro-sidebar';

import {useConfig} from '@hooks/useConfig';
import useLocalStorage from '@hooks/useLocalStorage';

import {
  LanguageContent,
  LanguageItem,
  LogoContainer,
  LogoImage,
  SidebarContent,
} from './styles';
const SideBar = () => {
  const {
    i18n: {changeLanguage},
  } = useTranslation();

  const [locale, setLocale] = useLocalStorage('locale', DEFAULT_LOCALE);

  const {menuCollapsed, setMenuCollapsed} = useConfig();

  const escFunction = useCallback(
    event => {
      if (event.key === 'Escape') {
        if (!menuCollapsed) {
          setMenuCollapsed(true);
        }
      }
    },
    [menuCollapsed, setMenuCollapsed],
  );

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

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
    <SidebarContent
      collapsed={menuCollapsed}
      collapsedWidth={0}
      backgroundColor="#fff">
      <LogoContainer>
        <LogoImage />
      </LogoContainer>
      <Menu>{renderMenu(menu)}</Menu>
      <LanguageContent>
        {languages.map((item, index) => (
          <LanguageItem
            key={index}
            $selected={locale === item.locale}
            src={item.src}
            onClick={() => {
              setLocale(item.locale);
              changeLanguage(item.locale);
            }}
          />
        ))}
      </LanguageContent>
    </SidebarContent>
  );
};

export default SideBar;
