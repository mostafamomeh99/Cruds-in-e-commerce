import { configureStore } from "@reduxjs/toolkit";
import Productslicereducer from "./Productslice";
 let Store =configureStore({
    reducer:{
        Products:Productslicereducer,
    }
})


export default Store