import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../router/routes';
 
const AppRouter = () => {
   return (
      <Routes>
         {routes.map(route => 
            <Route 
            key={route.id}
            element={route.component} 
            path={route.path} 
            exact={route.exact}
            />
         )}
    </Routes>
   );
};

export default AppRouter;