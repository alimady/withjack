import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Routes/Nav/Nav.comonent';
import Main from './Routes/Main/Main.component';
import Signin from './Routes/Sign-in/Signin.component';
import Signup from './Routes/Signup/Signup.component';
 function App() {
  return (
  <Routes>
   <Route path='/' element={<Navigation/>}>
    <Route  index  element={<Main/>} />
    <Route path='signin' element={<Signin/>} />
    <Route path='signup' element={<Signup/>} />
   </Route>
  </Routes>
  );
}

export default App;
