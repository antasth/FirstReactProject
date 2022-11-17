import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router/routes';

const AppRouter = () => {
   const isAuth = true
   return (
      <Routes>
         {isAuth
            ? 
            privateRoutes.map(route =>
               <Route
                  key={route.id}
                  element={route.component}
                  path={route.path}
                  exact={route.exact}
               />               
            )            
            :
            publicRoutes.map(route =>
               <Route
                  key={route.id}
                  element={route.component}
                  path={route.path}
                  exact={route.exact}
               />
            )
         }
      </Routes>
   );
};

export default AppRouter;