import './App.css';
import Login from './Component/Login';
import Profile from './Component/Profile';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
       <Route path='/' element={<Login  />} />
      <Route path='/profile' element={<Profile />} />
      </Routes>
      

    </div>
  );
}

export default App;
