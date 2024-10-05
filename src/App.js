import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';
import Method from './components/Method';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import Projects from './components/Projects/Projects';
import Services from './components/Services';
import Products from './components/Products';
import Websites from './components/Websites';
import TheDailyMemphian from './components/Projects/TheDailyMemphian';
import Clients from './components/Clients';
import Footer from './components/Footer';
import BlogDetails from './components/BlogDetails';
import Career from './components/Career';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>

          <Route path='/about' element={<About/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/blog/:id' element={<BlogDetails/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/method' element={<Method/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/websites' element={<Websites/>}></Route>
          <Route path='/clients' element={<Clients/>}></Route>

          <Route path='/projects' element={<Projects/>}>
          <Route path='thedailymemphian' element={<TheDailyMemphian/>} />
          </Route>
          <Route path='/career' element={<Career/>}></Route>
          
          <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
