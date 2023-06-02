import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Navigation/Navigation';
import { Layout } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <Layout>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Layout>
  );
}
