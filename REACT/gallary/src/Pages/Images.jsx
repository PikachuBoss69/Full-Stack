import React from 'react';
import Profile from '../components/Profile Details/Profile';
import ImageCompartment from '../components/Image Section/ImageCompartment';
import Pagination from '../components/pagination/Pagination';
import { useState, useEffect } from 'react'
import axios from 'axios';
import styles from './Images.module.css';


function Images() {
      const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1);
  const [selectedId, setSelectedId] = useState();

  const getData = async () => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    setUserData(response.data);
  } catch (error) {
    console.log("API Error:", error);
  }
};

  useEffect(()=>{
    getData();
  },[index]);

  return (
    <div className={styles.component}>

    <div className={styles.otherComponent}>
      <Profile data ={userData} selectedId = {selectedId}/>
      <ImageCompartment data = {userData} setSelectedId = {setSelectedId}/>
    </div>
    <div className={styles.pagination}>
      <Pagination  index={index} setIndex={setIndex} />
    </div>
    
    </div>

  )
}

export default Images;
