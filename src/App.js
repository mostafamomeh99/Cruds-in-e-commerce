import './App.css';
import { Route ,Routes } from 'react-router-dom';
import NavbarSearch from './Components/NavbarSearch';
import NavbarCategory from './Components/NavbarCategory';
import Products from './Components/Products';
import Addproduct from './Components/Addproduct';
import Categorybutton from './Components/Categorybutton';
function App() {
  return (<>
<Routes>
  <Route path='/' element={<>
    <div className="container mt-4">
<div className="row row-cols-sm-2"> 
<div className='col-lg-7 col-md-6 col-sm-4'>
<NavbarSearch/>
</div>
<div className=' col-lg-5 col-md-6 col-sm-8 mt-2 mt-sm-0'>
<NavbarCategory/>
</div>
</div>
  </div>
  <div className='container mt-2'>
<Categorybutton/>
  </div>
<Products />
  </>} />
 <Route path='/sell' element={<>
 <div className='container mt-3'>
 <Addproduct/></div></>}/>
</Routes>
    </>
  );
}

export default App;
