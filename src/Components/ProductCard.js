import React from 'react'

 function ProductCard({data}){
  return (
    <div className="card"  id="cardproduct">
 <div id='heartsymbolcontainer'><img src={data.image} className="card-img-top" alt="..." id="imgproduct"/>
  <span id='heartsymbol'>  <i className="fa-regular fa-heart fa-lg" ></i></span> </div>
  <div className="card-body">
    <h5 className="card-title" id='productname'>{data.productname} </h5>
    <p className="card-text fw-bold" id='productprice'><i className="fa-solid fa-sterling-sign me-1"></i>{data.price}</p>
    <p id='icardproductdescription'> <span className="card-text fw-bold" >describtion :</span> {data.describe}
    </p>
    <p id='imgfixedproduct'><img src="https://s3-alpha-sig.figma.com/img/92d0/0d2c/5db05bf878eba0bb6a0084baa24dccea?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MRYCIUaOEHp~gpTJYGHaLbW6Cz4wwoABfoMxIHk-tuBlRZwct4aJSxA0cXsygucxnxrPxH6iZocX08yttMXOeUSLvuJxGGGYeV2H6nmKFfzaCNtRRRuX7YpmWBMVxoOg~t4r43InLCJCi4gmYzluizEG0XlRT8ECWhRElJWh60La1xFHrl-Zh5XOUFVXwUjsN5RVcjDgsFQYDyQM3DF6FBBHejvPK~Ptkd~fkl7iu1vnxnzYdKm3-jK13VXO3H2-Rd4Jx8-FIk3Fn3qhqL2-IjzouY5XkJ~iJL8bBtNpK02eGYxSKTP640RsWBVmDiKtCwi4S0Yxg8zrSNZMlncc6g__" alt="..." 
   style={{ width: "30px", height: "30px", borderRadius: "50%" }}
   className='me-2'
   />
    Josie Parker
    </p>
  </div>
</div>
  )
}

export default ProductCard