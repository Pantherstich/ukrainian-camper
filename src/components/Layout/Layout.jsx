import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Main } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';
import { Header } from 'components/Header/Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </div>
  );
};

export default Layout;
