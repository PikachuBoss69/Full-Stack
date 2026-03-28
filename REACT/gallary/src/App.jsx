import { useState, useEffect } from 'react'
import Profile from './components/Profile Details/Profile';
import ImageCompartment from './components/Image Section/ImageCompartment';
import Pagination from './components/pagination/Pagination';
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';


function App() {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1);
  const [selectedId, setSelectedId] = useState();

  const getData = async ()=>{
    console.log("hello")
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setUserData(response.data);
  }

  useEffect(()=>{
    getData();
  },[index]);


  return (
    <div className='merger'>   
    <div className='nav-bar'>
      <NavBar/>
    </div>
    <div className='other-component'>
      <Profile data ={userData} selectedId = {selectedId}/>
      <ImageCompartment data = {userData} setSelectedId = {setSelectedId}/>
    </div>
    <div className='pagination'>
      <Pagination  index={index} setIndex={setIndex} />
    </div>
    </div>
  );
}

export default App;
