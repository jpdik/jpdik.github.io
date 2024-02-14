import {useCallback, useEffect} from 'react';

import {useConfig} from '@hooks/useConfig';

import SideBar from '@components/Sidebar';

import {Container, Content} from './styles';

export const Main = ({children}) => {
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

  return (
    <Container>
      <SideBar />
      <Content onClick={() => (!menuCollapsed ? setMenuCollapsed(true) : null)}>
        {children}
      </Content>
    </Container>
  );
};
