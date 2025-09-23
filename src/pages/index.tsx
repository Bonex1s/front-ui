import { lazy } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import { routers } from 'utils/consts';
export const Home = lazy(() => import('./Home'));
export const Product = lazy(() => import('./Product'));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Navigate to={routers.home} />} />
        <Route path={routers.home} element={<Home />} />
        <Route path={routers.product} element={<Product />} />
         
      </Routes>
    </BrowserRouter>
    
  );
}

