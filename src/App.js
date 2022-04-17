import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Services from './pages/Services/Services';
import Service from './pages/Service/Service';
import Register from './pages/Register/Register';
import Login from './pages/LogIn/Login';
import NotFound from './pages/NotFound/NotFound';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home> } ></Route>
        <Route path='/blog' element={<Blog></Blog> } ></Route>
        <Route path='/services' element={<Services></Services>} > </Route>
        <Route path='/service' element={<Service></Service>} ></Route>
        <Route path='/login' element={<Login></Login> } ></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
