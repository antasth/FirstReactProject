import { BrowserRouter } from 'react-router-dom';
import MyNavbar from './components/UI/navbar/MyNavbar';
import AppRouter from './components/AppRouter';
import { useState } from 'react';
import { AuthContext } from './context';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
    <BrowserRouter>
      <MyNavbar />
      <AppRouter />
    </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;