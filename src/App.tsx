import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Navigation from './components/ui/Navigation';
import Footer from './components/ui/Footer';
import Wrapper from './pages/Wrapper';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Wrapper>
              <Dashboard />
            </Wrapper>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
