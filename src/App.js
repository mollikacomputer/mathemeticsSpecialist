import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Home/Footer/Footer';
import Header from './Components/Home/Header/Header';
import Home from './Components/Home/Home/Home';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home> } > </Route>
          <Route path='/blog' element={<Blog></Blog>} > </Route>
          <Route path='/login' element={<Register></Register>} >Login</Route>
          <Route path='/register' element={<Register></Register>} ></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
