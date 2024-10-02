import React, { useRef } from 'react'
import { searchdata ,searchend} from '../Features/Productslice';
import { useDispatch, useSelector } from 'react-redux';
import {searchprocess} from '../Features/Productslice'
const NavbarSearch = () => {
  let searchtoggle=useSelector(searchprocess)
let searchexprission=/^(?!\s*$).+/;
let inputref=useRef()
let dispatch=useDispatch()
// start search
  let searchaction=()=>{
    if(searchexprission.test(inputref.current.value))
      {dispatch(searchdata(inputref.current.value))}
  }
  // end search
  let searchendaction=()=>{
    inputref.current.value=""
    dispatch(searchend())
  }

  return (<>
  <div className="d-flex form-inputs" id='searchcontainer' data-testid="searchcontainer">
        <input className="form-control" type="text" placeholder="Search" id='searchinput' ref={inputref} />
        {!searchtoggle?<i className="bx bx-search" id='searchicon' onClick={searchaction} ></i>:
       <i className="bx bx-x" id='searchicon' onClick={searchendaction}></i>
        }
        </div>
  </>
  )
}

export default NavbarSearch