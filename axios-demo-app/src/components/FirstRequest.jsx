import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './FirstRequest.css'
import { Link } from 'react-router-dom';

function FirstRequest ({ setData }) {
  let [dataArr,setDataArr] = useState([]);
  
  const url = "https://course-api.com/react-store-products"
  // let dataArr = [];
  const fetchData = async ()=>{
    try{
      const response = await axios.get(url);
      console.log(response);
      dataArr = response.data
      console.log(dataArr)
      setDataArr(dataArr);
     setData(dataArr)
      // props.setData(dataArr)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchData();
  },[])

  const clickHandler = (data) =>{

  }
  return (
    // <ul className='grid'>
    //   {data_arr.map( data => <img src={data.image} onClick={()=> clickHandler(data)}/>)}
    // </ul>
    <>
    {dataArr.map( data =>   {
      return (
        // 
        <div>
           {/* {dataArr.map( data =><img src={data.image} alt="imageimage" width="400px" height="400px"/> )} */}
         
          <Link className='grid' to={`/${data.id}`} >
             <img  src={data.image} alt="imageimage"/></Link>
        </div>
      );
    })}
    </>
  )

  
}

export default FirstRequest