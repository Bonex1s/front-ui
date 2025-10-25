import { lazy } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import ScrollToTop from 'components/ScrollToTop';

import { routers } from 'utils/consts';
import ProductCollection from './ProductCollection';
export const Home = lazy(() => import('./Home'));
export const Product = lazy(() => import('./Product'));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      <Routes>
        <Route path={'/'} element={<Navigate to={routers.home} />} />
        <Route path={routers.home} element={<Home />} />
        <Route path={routers.productCollection + '/:id'} element={<Product />} />
        <Route path={routers.productCollection} element={<ProductCollection />} />
      </Routes>
    </BrowserRouter>
    
  );
}

