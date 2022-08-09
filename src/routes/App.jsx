import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Signup } from '@pages';
import '@/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
