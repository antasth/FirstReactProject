import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import { publicRoutes, privateRoutes } from '../router/routes';

const AppRouter = () => {
   const {isAuth, setIsAuth} = useContext(AuthContext)
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