import { getPhotos, getVideos } from './api/mediaApi';
import NavBar from './components/NavBar'
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import CollectionPage from './pages/CollectionPage';
import { ToastContainer } from 'react-toastify';

function App() {


  return (
    <div className="h-screen w-full bg-grey-950 text-white">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<CollectionPage/>}/>
      </Routes>

      <ToastContainer/>
    </div>
  )
}

export default App;
  