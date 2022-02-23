import './index.scss'
import { Routes, Route } from 'react-router-dom'

import Profile from './Pages/Profile/Profile'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    
      
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile/:username' element={<Profile />} />
    </Routes>
  );
}

export default App;
