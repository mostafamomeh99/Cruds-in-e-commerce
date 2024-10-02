import React, { useEffect, useRef, useState} from 'react';
import { useDispatch } from 'react-redux';
import {uploadproduct} from '../Features/Productslice';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Addproduct = () => {
let navigator=useNavigate()
  let dispatch=useDispatch()
  const [uploadedFile, setUploadedFile] = useState(null);
  let [data,setdata]=useState({id:0,productname:"",price:"",type:"",category:"",describe:"",image:""})
let [uploadopen,setuploadopen]=useState(true)
let describeexprission=/^(?!\s*$).{1,100}$/;
let nameexprission=/^(?!\s*$).{1,50}$/;
let priceexprission=/^\d{1,15}$/;
let titleref=useRef()
let priceref=useRef()
let categoryref=useRef()
let describeref=useRef()

useEffect(
  ()=>{
    if(uploadedFile&&priceexprission.test(priceref.current.value)&&nameexprission.test(titleref.current.value)&&
    describeexprission.test(describeref.current.value)&&(categoryref.current.value==="1"||categoryref.current.value==="2"))
      {setuploadopen(false)  }
      else {setuploadopen(true)}
  }
  ,[uploadedFile,data])

let changeprice=(e)=>{
  if(priceexprission.test(e.target.value))
  {setdata({...data,[e.target.name]:e.target.value})}
}
let changetitle=(e)=>{
  if(nameexprission.test(e.target.value))
  {setdata({...data,[e.target.name]:e.target.value})}
}
let changecategory=(e)=>{
  if(e.target.value==="1"||e.target.value==="2")
  {setdata({...data,[e.target.name]:e.target.value})}
}

let changedescribe=(e)=>{
  if(describeexprission.test(e.target.value))
  {setdata({...data,[e.target.name]:e.target.value})}
}

let uploadform=(e)=>{
  e.preventDefault()
  dispatch(uploadproduct(data))
  Swal.fire({
    position: 'top-start',
    icon: 'success',
    title: 'Your Product Uploaded Successfully',
    showConfirmButton: false,
    timer: 1500,
  });
  titleref.current.value=""
priceref.current.value=""
 categoryref.current.value=""
 describeref.current.value=""
 setUploadedFile(null)
 navigator('/')
}
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];  // Only take the first file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;  // Base64 string for preview
        setUploadedFile(base64String); 
         setdata({ ...data, image: base64String });   // Store base64 string
      };
      reader.readAsDataURL(file);  // Read file as Data URL

    }
  }

  return (
    <>
      <h1>Sell an item</h1>
      <form>
        {/* File input */}
        <div className="mb-3">
          <label htmlFor="photoinputproduct" className="form-label fw-bold">
            Upload photo
          </label>
          <div id="photoinputproduct-upload-area">
            <input
              type="file"
              id="photoinputproduct"
              onChange={handleFileChange}
              accept="image/*"  // Accept only image files
            />
            <label htmlFor="photoinputproduct" id="photoinputproduct-label">
              Upload photo
            </label>
          </div>
          {/* Image Preview */}
          <div id="imagePreview"  >
            {uploadedFile && (
              <img
                src={uploadedFile}
                alt="Uploaded Preview"
                className="preview-img"
                style={{ maxWidth: '800px', }}
                name='image'
              />
            )}
          </div>
        </div>

        {/* Other inputs */}
        <div className="mb-3">
          <label htmlFor="titleinputproduct" className="form-label fw-bold">
            Title
          </label>
          <input type="text" className="form-control" id="titleinputproduct" ref={titleref}
          name='productname'
          onChange={changetitle}/>
        </div>

        <div className="mb-3">
          <label htmlFor="describeinputproduct" className="form-label fw-bold">
            Describe your item
          </label>
          <textarea
            className="form-control"
            id="describeinputproduct"
            rows="3"
            ref={describeref}
          onChange={changedescribe}
          name='describe'
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="selectinputproduct" className="form-label fw-bold">
            Category
          </label>
          <select id="selectinputproduct" className="form-select" defaultValue=""  ref={categoryref}
          name='category'
          onChange={changecategory}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="1">Men</option>
            <option value="2">Women</option>
          </select>
        </div>

        <div className="mb-5" id='iconproductcontainer'>
          <label htmlFor="priceinputproduct" className="form-label fw-bold">
           Item Price
          </label>
          <input type="text" className="form-control" id="priceinputproduct" placeholder="00.00" ref={priceref}
          name='price'
          onChange={changeprice}
          />
          <i className="fa-solid fa-sterling-sign" id='iconproductform'></i>
        </div>
<div className='d-flex justify-content-center mb-3'>
        <button className="btn w-auto" id='submitinputproduct' disabled={uploadopen}
        onClick={uploadform}
        >Upload item</button>
        </div>
      </form>
    </>
  );
};

export default Addproduct;
