import React  from 'react'
import { sortdata } from '../Features/Productslice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const NavbarCategory = () => {
let navtoadd=useNavigate()
let dispatch=useDispatch()

let Selectsort=(e)=>{
  dispatch(sortdata(e.target.value))
}
  return (
    <div className="d-flex form-inputs align-items-center" id='categorycontainer'  data-testid="categorycontainer">
        <div className='align-self-center me-2' id='categoryword'>Sort by</div>
        <div className="dropdown" id="dropdowncontainer">
  <select id="categoryselect" onChange={Selectsort}>
  <option value="Default">Default</option>
  <option value="1" id="categoryselect1" >A - Z</option>
  <option value="2">Z - A</option>
  <option value="3">Price: Low to High</option>
  <option value="4">Price: High to Low</option>
</select>
</div>
<div className='align-self-center'><button className='btn  align-self-start ms-1' id='categorybutton' 
onClick={()=>{navtoadd('/sell')}}
>
    + Sell Item</button></div>
        </div>
  )
}

export default NavbarCategory