import React, {  useState,useEffect } from 'react';
import { country,SLState, IndCity, IndState, SLCity } from '../resources/Country'

const Dropdown = (props) => {
  const [data,setData]=useState(props.datas)

  useEffect=(()=>{
    console.log("HI")
    console.log("data",data)
  },[])



  return (

    <div>
        
        <select className="form-select" aria-label="Default select example">
            <option selected disabled>Select {props.name}</option>
            
                {data.map((options)=>{
                  <option value={options.value}>{options.label}</option>
                })
              }     
        </select>
    </div>
  )
}

export default Dropdown