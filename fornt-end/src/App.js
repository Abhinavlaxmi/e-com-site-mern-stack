import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/login-signup/Signup';
import Home from './components/main/Home';
import Profile from './components/main/Profile';
import ProtectedComponents from './ProtectedComponents';
import Login from './components/login-signup/Login';
import AddProduct from './components/main/AddProduct';
import DeleteProduct from './components/main/DeleteProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<ProtectedComponents/>} >
        <Route path='/' element={<Home />} />
        <Route path='/add-product' element={<AddProduct />} />
        {/* <Route path='/update' element={<h1>Update Page Hun Main</h1>} /> */}
        <Route path='/remove' element={<DeleteProduct />} />
        <Route path='/profile' element={<Profile />} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;