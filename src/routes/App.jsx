import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Signup, Home } from '@pages';
import '@/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
