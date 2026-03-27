import { useState, useEffect } from 'react'
import Profile from './components/Profile Details/Profile';
import Imagecompartment from './components/Image Section/Imagecompartment';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='merger'>   
      <Profile/>
      <Imagecompartment/>
    </div>
  );
}

export default App;
