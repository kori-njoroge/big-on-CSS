import './App.css';
import Dashboard from './pages/dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landingpage from './pages/landingpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
