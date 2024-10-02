import { useSelector } from 'react-redux'
import {allproducts} from '../Features/Productslice'
import Pagination from './Pagination'
import { useEffect, useState } from 'react';

const Products = () => {
  let products = useSelector(allproducts);
  let [data, setData] = useState(products);


const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
      setData(products);
      setCurrentPage(0);
  }, [products]);

  return (
    <>
        {data.length !== 0 ? <Pagination items={data} itemsPerPage={4} currentPage={currentPage} setCurrentPage={setCurrentPage} /> : 
        <><div className='container'><h1 className='mt-5 ms-2'>There Is No Items</h1>
        <img src="https://img.freepik.com/premium-vector/no-data-concept-illustration_86047-486.jpg" alt=""
         style={{ width: "400px", height: "400px"}}
        />
        </div></>}
    </>
)

}
export default Products;

