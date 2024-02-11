import {Fragment} from 'react';

import {Outlet} from 'react-router-dom';

import {Footer} from '@components/Footer';
import {Header} from '@components/Header';
import {Main} from '@components/Main';

export const Root = () => {
  return (
    <Fragment>
      <Main>
        <Header />
        <Outlet />
      </Main>
      <Footer />
    </Fragment>
  );
};
