import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Layout } from '@components/Layout';
import { AppProvider } from '@context';
import { UserAuthWrapper } from '@auth/UserAuthWrapper.jsx';
import '@/App.css';

const Home = lazy(() => import('@pages/Home'));
const Login = lazy(() => import('@pages/Login'));
const Signup = lazy(() => import('@pages/Signup'));
const Detail = lazy(() => import('@pages/Detail'));

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route
              path="/"
              element={
                <UserAuthWrapper>
                  <Layout>
                    <Suspense fallback={<div>Loading</div>}>
                      <Home />
                    </Suspense>
                  </Layout>
                </UserAuthWrapper>
              }
            ></Route>
            <Route
              path="login"
              element={
                <Suspense fallback={<div>Loading</div>}>
                  <Login />
                </Suspense>
              }
            ></Route>
            <Route
              path="signup"
              element={
                <Suspense fallback={<div>Loading</div>}>
                  <Signup />
                </Suspense>
              }
            ></Route>
            <Route
              path="/:id"
              element={
                <UserAuthWrapper>
                  <Layout>
                    <Suspense fallback={<div>Loading</div>}>
                      <Detail />
                    </Suspense>
                  </Layout>
                </UserAuthWrapper>
              }
            ></Route>
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </DndProvider>
  );
}

export default App;
