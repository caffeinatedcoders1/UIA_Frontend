import React, { useEffect } from 'react'
import Dropdown from './Dropdowns'
import { country,SLState, IndCity, IndState, SLCity } from '../resources/Country'

const SearchBars = () => {
    

    useEffect(()=>{
        console.log("countries",country)
    },[])
  return (
    <div>
        <div className="row mt-5 container">
            <div className="col">
                <Dropdown name="country" datas={country} />
            </div>

            <div className="col">

            </div>
            <div className="col">

            </div>
        </div>
    </div>
  )
}

export default SearchBars