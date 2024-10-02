import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryaction , searchprocess } from '../Features/Productslice'
const Categorybutton = () => {
    let dispatch=useDispatch()
let search=useSelector(searchprocess)
    let action=(type)=>{
dispatch(categoryaction(type))
    }
  return (
   <>
   {!search?<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Categories
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  <li><div className="dropdown-item" id='AllCategory' onClick={()=>{action("All")}} >All</div></li>
    <li><div className="dropdown-item" id='MenCategory' onClick={()=>{action("Men")}} >Men</div></li>
    <li><div className="dropdown-item" id='WomenCategory' onClick={()=>{action("Women")}}>Women</div></li>
  </ul>
</div>:""
   }
   </>
  )
}

export default Categorybutton