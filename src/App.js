import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home/Home';
import Service from './pages/Service/Service';
import Register from './pages/Register/Register';
import Login from './pages/LogIn/Login';
import NotFound from './pages/NotFound/NotFound';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import BookNow from './pages/RequireAuth/BookNow/BookNow';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import AboutMe from './pages/AboutMe/AboutMe';
import Blogs from './pages/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home> } ></Route>
        <Route path='/home' element={<Home></Home> } ></Route>
        <Route path='/blogs' element={<Blogs></Blogs> } ></Route>
        <Route path='/service' element={<Service></Service>} ></Route>
        <Route path='/login' element={<Login></Login> } ></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>} ></Route>
        <Route path='/booknow' element={
          <RequireAuth>
            <BookNow></BookNow>
          </RequireAuth>
        } >

        </Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
