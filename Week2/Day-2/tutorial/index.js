// console.log("first")
// setTimeout(()=>{
//     console.log("salam")
// },7000)
// console.log("second")



// then
// async await

// axios.get("https://northwind.vercel.app/api/categories")
// .then((datas)=>{
//     console.log(datas.data)
// })
// .catch((err)=>{
//     console.log(err)
// })

let productsDiv=document.querySelector(".products")

async function GetDatas() {
    try{
        let result = await axios.get("https://northwind.vercel.app/api/categories")
        

        for(let i=0;i<result.data.length;i++){
    //       productsDiv.innerHTML+=`
    //       <div class="col">
    //       <div class="product">
    //           <div class="product-bottom">
    //               <h3>${result.data[i].name}</h3>
    //               <span>
    //                   ${result.data[i].description}
    //               </span>
    //               <button>View</button>
    //           </div>
    //       </div>
    //    </div>
          
    //       `
            CreateProduct(result.data[i])
  
        }
    }
    catch(err){
        console.log(err)
    }
}

GetDatas()





function CreateProduct(product){
    let colDiv=document.createElement("div")
    let productDiv=document.createElement("div")
    let bottomDiv=document.createElement("div")
    let H3=document.createElement("h3")
    let span=document.createElement("div")
    let button=document.createElement("button")
    
    colDiv.className="col"
    productDiv.className="product"
    bottomDiv.className="product-bottom"

    H3.textContent=product.name
    span.textContent=product.description
     button.textContent="View"


     bottomDiv.append(H3,span,button)
     productDiv.append(bottomDiv)
     colDiv.append(productDiv)
     productsDiv.append(colDiv)
}



let detail=document.querySelector(".detail")

async function GetData(){
   let result= await axios.get("https://northwind.vercel.app/api/categories/7")
   console.log(result.data)
}

async function DeleteData(){
    let result= await axios.delete("https://northwind.vercel.app/api/categories/8")
    console.log(result.data)
 }


 async function PostData(){
    let newProduct={
        name:"CS306",
        description:"lorem"
    }
    let result= await axios.post("https://northwind.vercel.app/api/categories",newProduct)
    console.log(result.data)
 }
 
 async function PutData(){
    let updateProduct={
        name:"CS306 update",
        description:"lorem update"
    }
    let result= await axios.put("https://northwind.vercel.app/api/categories/1",updateProduct)
    console.log(result.data)
 }

detail.addEventListener('click',()=>{
    // GetData()
    // DeleteData()
    // PostData()
    PutData()
})
