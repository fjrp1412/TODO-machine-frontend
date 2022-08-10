import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Signup, Home } from '@pages';
import { AppProvider } from '@context';
import { UserAuthWrapper } from '@auth/UserAuthWrapper.jsx';
import '@/App.css';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route
            path="/"
            element={
              <UserAuthWrapper>
                <Home />
              </UserAuthWrapper>
            }
          ></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
