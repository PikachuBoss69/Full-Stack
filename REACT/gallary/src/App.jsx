import { useState, useEffect } from 'react'
import Profile from './components/Profile Details/Profile';
import ImageCompartment from './components/Image Section/ImageCompartment';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    let url ='';
    const data = fetch();
  })

  return (
    <div className='merger'>   
    <div className='nav-bar'>
      <NavBar/>
    </div>
    <div className='other-component'>
      <Profile/>
      <ImageCompartment/>
    </div>
    </div>
  );
}

export default App;
