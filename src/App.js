import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import {Routes,Route} from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <MyNavbar/> 
    {/* <Home/>
     <About/>
     <Products/>
     <Contact/>   */}
     
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="products" element={<Products/>}/>
      <Route path="contact" element={<Contact/>}/> 
      {/* <Route path="*" element={<h3>Sorry! could not find the page you are looking for!</h3>}/>     */}
      <Route path="*" element={<PageNotFound/>}/>
     </Routes>

     <MyFooter/>
    </div>
  );
}

export default App;
