import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './FirstRequest.css'

function FirstRequest() {
  const [data_arr, setData] = useState([]);
  const url = "https://course-api.com/react-store-products"
  let dataArr = [];
  const fetchData = async ()=>{
    try{
      const response = await axios.get(url);
      console.log(response);
      dataArr = response.data
      console.log(dataArr)
      setData(dataArr)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchData();
  },[])

  const clickHandler = (data) =>{
    console.log("Image Clicked" + data.id)
  }
  return (
    <ul>
      {data_arr.map( data => <img src={data.image} onClick={clickHandler}/>)}
    </ul>
  )

  
}

export default FirstRequest