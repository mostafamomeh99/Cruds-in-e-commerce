import { createSlice} from "@reduxjs/toolkit";

let initialState = {
    // local storage data use (||) to if there is no add data there will be no errors
    data:JSON.parse(localStorage.getItem("products")) ||[
    {id:1,productname:"Dress",price:"30.00",category:"Women",type:"entry",describe:"classic dress",image:"https://s3-alpha-sig.figma.com/img/51d3/cbc3/b1d8bef0f98c2c1ca65646437d4ef615?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SYz2N73p7syZd0ZMpjBdIDPzRCw5kO3iQQuLZiFr6A3y1VN4sgE5QS--EPPSzb4nbvJs9p3cUQ5y7q43JKRwj5aJYWNtsK-Ms2d6kocXmEuRX2ZjdWF1BTzkL7UQmPixWMCBAwidt7~nbyC5ueTca4sESSGlJdVk~kJQU4DlHZ0nOsxjVzKSDU7IRX0AR3nS9RdhMZVEWKC0PY1eISHDS2ThvoAFq2XcI2aGXRXSEfPUr7nLM4IdD6yv7tycB34cBY1s5KlYRi0pApXSmU9vIHwPvxhMUboVFBgZpOja9ZC3a-WMUVP4Mmj-hl1bhLnFtWoh3fJe6weIisgfCUaj4Q__"},
    {id:2,productname:"Jacket",price:"40.00",category:"Women",type:"entry",describe:"classic jacket",image:"https://s3-alpha-sig.figma.com/img/2458/1c7e/c272b7b859194b10a7549b849788eecd?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W2tr956fkzy59yJ6vTrpXxB2NodLFDFZEFM75InLcgE8MjF4yWS3VwoNyBcHOpA52rZ8P4185FoPWR1hIspLMmYEdJxC-~hdX2lN-OX75YnVdD7WPYTIg4mz5ks-SDbL2sZ7cndFh4x1stJDAIkiNgto6jMRJ0Vn-C3FEsqu50byN97bhDivYHnvKwooRUdkMAL5Voa2MSjaCq-WEDaE8UifEVicbwMADf0DzOBa1fyehAi1pWz5jQytHC-sTGksrRW1FAGNthfy6wpwhyEsElsWGETmTjdh8fXUaHzmT-4oAIWWZtPbtCEsat0y3Rogw-yBfEOECwzYmeTfvnX9zg__"},
    {id:3,productname:"Hoodie",price:"50.00",category:"Women",type:"entry",describe:"Trendy hoodie",image:"https://s3-alpha-sig.figma.com/img/d6fe/3639/c165203894db2400498b49aee0902c46?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xq~j8Y6M3ZMKyFuIfprXqBs6IR5He-mko7s0MmaPtg8xrXDQxrIVHyMgQBPawky7tHAyRyQWDYbQYBCRD8NQItXcEcawsVIWjaln1fS66l8WTlMoaprBUq9EPJI8qJ9KesgC~LLpgyH1LlAdR8VF4Bgj4ltyIuo-EuXi9FcA-rYQuUfVAgvp8tx7v5Tit7KQmBxhTWChhYfzceZtkgiEFi5dW5V3tQ56KCgSVEWB4nX5HGmYwymhY7bvL--U4SFVpRp~KYVdpTLDqTE4X1qFPgGmmFJsMYMmt0qRCs5eU0ojQlL3kqusaHUoEJvrlUTh-7zqf8cvIeu5kV6nmkly2A__"},
    {id:4,productname:"Jacket",price:"60.00",category:"Women",type:"entry",describe:"fashion jacket",image:"https://s3-alpha-sig.figma.com/img/b851/f138/a7d0e0d76c5cc5e7662cb7378198f6da?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UtEbsMNnDMwcLjWZudr4QHco5e97c050GDoOkqAk~LuMOHmJ~VD~vKComNrjkhWcrXGUFTS3DA-cZ8rFRRmIPp8N0qRVne2Xy5hH9qtknw0TEtlgSDQImxuc1Pg0zocrn3DrQDwV083fvTTpz0eFALokkvA4hbCWKPYPE8cYQmefbkvOxvJK188VSwa6WTKmXbQuY905sr-Z1AejEXGymkIdL-m2Z97IseSqe97BUxyCNGxmSD~2MgQtJVOI6B6pSOnPgnvSd8zcC77EZ0e55xZ6SX-TYd64yeOhDPop8kySTc5N8UIUaLs8sjQcKAgWCaQ-iM7w2OGm2Hxt5aAYsw__"},
   {id:5,productname:"TShirt",price:"80.00",category:"Men",type:"entry",describe:"fashion t-shirt",image:"https://eg.hm.com/assets/HNM/18556044/45589d4f97bfb3386e0acf77e4066534c83f7d9d/1/45589d4f97bfb3386e0acf77e4066534c83f7d9d.jpg"},
   {id:6,productname:"Coat",price:"40.00",category:"Men",type:"entry",describe:"classic Coat",image:"https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2023/09/hockerty_man_wearing_top_coat_8360fc86_c0e3_4a32_a994_5df6cf4b8ad4.jpg"},
   {id:7,productname:"Coat",price:"50.00",category:"Women",type:"entry",describe:"old-fashion Coat",image:"https://assets.digitalcontent.marksandspencer.app/image/upload/w_1024,q_80,f_auto/SD_09_T97_5905I_T0_X_EC_0"},
   {id:8,productname:"Suit",price:"60.00",category:"Men",type:"entry",describe:"old-fashion Suit",image:"https://images.ctfassets.net/prxuf37q3ta2/7oqmYkYsQHLcIEFmiqj4dr/dc8eaaee5ab9904dda9ee243b67a02bb/1229_20230802_MW_LF_BEST-SUMMER-SUITS_BSLH-10197_6"},
   {id:9,productname:"TShirt",price:"30.00",category:"Men",type:"entry",describe:"Trendy t-shirt",image:"https://static.bershka.net/4/photos2/2024/V/0/2/p/3009/696/403/3009696403_1_1_0.jpg?imwidth=800&ts=1712762944326"},
   {id:10,productname:"Suit",price:"40.00",category:"Men",type:"entry",describe:"Trendy suit",image:"https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2022/12/polo_linen_suit_loafers__3_.jpg"},
   {id:11,productname:"Hoodie",price:"50.00",category:"Women",type:"entry",describe:"fashion hoodie",image:"https://inyourshoe.com/cdn/shop/products/white-hoodie-plain-hoodies-in-your-shoe-879927.jpg?v=1722248456"},
   {id:12,productname:"Jacket",price:"60.00",category:"Women",type:"entry",describe:"old-fashion jacket",image:"https://thursdayboots.com/cdn/shop/products/1024x1024-Womens-Jackets-Racer-Black-102722-1_1024x1024.jpg?v=1667863479"},
   {id:13,productname:"TShirt",price:"30.00",category:"Men",type:"entry",describe:"fashion t-shirt",image:"https://contents.mediadecathlon.com/p2731071/k$e0e69de1a7082b7685857c2bee9f4082/slim-fit-stretch-cotton-fitness-t-shirt.jpg?format=auto&quality=40&f=800x800"},
   {id:14,productname:"Chemise",category:"Men",price:"40.00",type:"entry",describe:"Trendy Chemise",image:"https://cdn.cafecoton.com/Delivery/Public/Image/600x-1/pr-33ls-slim-pin-point-1-e24_3.jpeg"},
   {id:15,productname:"Coat",price:"50.00",category:"Men",type:"entry",describe:"classic Coat",image:"https://assets.digitalcontent.marksandspencer.app/image/upload/w_1024,q_80,f_auto/SD_03_T16_1413J_SU_X_EC_0"},
   {id:16,productname:"Jacket",price:"60.00",category:"Women",type:"entry",describe:"Trendy jacket",image:"https://cdn11.nnnow.com/web-images/large/styles/L9FTY9J83E3/1665573568957/1.jpg"},

], 
sortdata:[], //temprory array to hold values of original data in sort conditions
search:[], //temprory array to hold values of original data in search conditions
issorted:false, //to know if we do sort
issearch:false ,//to know if we do search
iscategorize:false,
category:[]//temprory array to hold values of original data in category conditions
}

    export let Productslice=createSlice({
        name:"Products",
        initialState,
        reducers:{

            // sorting

            sortdata: (state,action)=>{
                let sorttype=action.payload
                if(sorttype==="Default") // all items
                    { //check if user sort it
                        if(state.issorted===true)
                            {state.data=state.sortdata.slice()
                                state.issorted=false; 
                            } 
                        
                }
                //sort A-Z
                  else if (sorttype==="1")
                  {if(state.issorted===false)
                   {
                    console.log(state.sortdata);
                    console.log(state.data);
                    state.sortdata=state.data.slice() //slice as we need copy 
                    state.data.sort((a, b) => a.productname.localeCompare(b.productname));
                    state.issorted=true
                } 
                    else {state.data.sort((a, b) => a.productname.localeCompare(b.productname));
                        state.issorted=true
                    }
                  }
                    //sort Z-A
                    else if (sorttype==="2")
                        {if(state.issorted===false)
                            {state.sortdata=state.data.slice()
                             state.data.sort((a, b) => b.productname.localeCompare(a.productname));
                             state.issorted=true
                         } 
                             else {state.data.sort((a, b) => b.productname.localeCompare(a.productname));
                                 state.issorted=true
                             }
                           }
                           //sort price from low to high
                        else if (sorttype==="3")
                            {if(state.issorted===false)
                                {state.sortdata=state.data.slice()
                                 state.data.sort((a, b) => Number(a.price) - Number(b.price));
                                 state.issorted=true
                             } 
                                 else {state.data.sort((a, b) => Number(a.price) - Number(b.price));
                                     state.issorted=true
                                 }
                               }
                                 //sort price from  high to low
                               else if (sorttype==="4")
                                {if(state.issorted===false)
                                    {state.sortdata=state.data.slice()
                                     state.data.sort((a, b) => Number(b.price) - Number(a.price));
                                     state.issorted=true
                                 } 
                                     else {state.data.sort((a, b) => Number(b.price) - Number(a.price));
                                         state.issorted=true
                                     }
                                   }
                  },
          
              
              // choose category
              categoryaction:(state,action)=>{
                if(action.payload==="All"){
                    if(state.iscategorize)
                    {state.data=state.category
                        state.iscategorize=false 
                    }
                }
                
                else{
                if(!state.iscategorize)
             {let type=action.payload
             let categoydata=state.data.filter(e=>e.category===type)
             state.category=state.data.slice()
             state.data= categoydata
            state.iscategorize=true
            }
            else{
                let type=action.payload
                let categoydata=state.category.filter(e=>e.category===type)     
                state.data= categoydata
            } }
              }
              
  
              
              ,  
          // search       
              searchdata: (state,action)=>{
let searchword=action.payload.toLowerCase()
state.issearch=true
let filtersearch=state.data.filter(e=>e.productname.toLowerCase().includes(searchword))
if(filtersearch.length!==0)
{ state.search=state.data.slice()
  state.data=filtersearch
 }              
else{
    state.search=state.data.slice() //slice as we need copy 
    state.data=[]
}
},
searchend: (state) => {
    state.issearch = false;
    // If categorized, revert to the category-filtered data
    if (state.iscategorize) {
        state.data = state.category;
    } else {
        // Otherwise, revert to full data
        state.data = state.search;
    }
} ,
     // add product
uploadproduct:(state,action)=>{
    action.payload.type="upload"
    action.payload.id=state.data[state.data.length-1].id+1
console.log(action.payload)
state.data.push(action.payload)
localStorage.setItem("products", JSON.stringify(state.data));
}

    }})

    export let allproducts =(state)=> state.Products.data
    export let searchprocess =(state)=> state.Products.issearch
    export let allproductsinsearch=(state)=> state.Products.search
    export let allproductsinsort=(state)=> state.Products.sort
    export let allproductsinscategory=(state)=> state.Products.iscategorize
export let {sortdata,searchdata,searchend,uploadproduct,categoryaction}=Productslice.actions;
    export default Productslice.reducer