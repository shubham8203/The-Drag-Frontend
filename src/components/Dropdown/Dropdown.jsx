import React, { useState } from 'react'
import './Dropdown.css'
import { Link } from 'react-router-dom';
const Dropdown = ({locations,input}) => {
  console.log(locations);
  
  return (
    <div className='dropdown'  >
      <ul>
        {
         locations.map((ele, i) => {


            return (
              <li key={i} onClick={()=>{
                input(ele);
              }}>


                {
                  ele
                }



              </li>

            )
          })
        }
      </ul>
    </div>
  )
}

export default Dropdown
