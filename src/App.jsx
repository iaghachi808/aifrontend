import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect empty path to login */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Our two main pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* 404 Fallback */}
        <Route path="*" element={<div className="h-screen flex items-center justify-center text-white">Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;