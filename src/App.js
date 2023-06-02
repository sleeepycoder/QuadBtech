
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './home.js/Home';
import Book from './Book/Book';
import LoginPage from './Login Page/LoginPage';
import Main_login from './MainLogin/Main_login';



function App() {
  return (
<BrowserRouter>
<LoginPage/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/mainlogin' element={<Main_login/>}/>
<Route path='/book/:name' element={<Book/>}/>









</Routes>


</BrowserRouter>

  
  );
}

export default App;
