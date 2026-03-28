
import NavBar from './components/NavBar/NavBar';

import Home from './Pages/Home';
import Product from './Pages/Product'
import About from './Pages/About'
import Images from './Pages/Images'
import NotFound from './Pages/NotFound'
import {Route, Routes} from 'react-router-dom';


function App() {


  return (
    <div className='merger'>   
    <div className='nav-bar'>
      <NavBar/>
   
    </div>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/images' element={<Images/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>

    </div>
    
  );
}

export default App;
