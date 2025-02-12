const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const app=express()

dotenv.config()
app.use(express.json())


let ProductSchema=mongoose.Schema(
    {
        name:String,
        image:String,
        isSale:Boolean,
        rate:Number,
        price:Number,
        discount:Number
    }
)


const ProductModel= mongoose.model("product",ProductSchema)



app.get("/products",async (req,res)=>{
    try{
        let products= await ProductModel.find()
        res.status(200).send(products)
    }
    catch(err){
        res.status(500).send(err)
    }
})

app.post("/products", async (req,res)=>{
    console.log(req.body)
    let newProduct= new ProductModel(req.body)
    await newProduct.save()
    res.status(200).send(newProduct)
})


app.get("/products/:id",async(req,res)=>{
    let id=req.params.id
    let product= await ProductModel.findById(id)
    res.send(product)
})

app.delete("/products/:id",async (req,res)=>{
    let id=req.params.id
   await ProductModel.findByIdAndDelete(id)
   res.send("deleted")
})
mongoose.connect(process.env.DB_Connection)
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err)
})


app.listen(3000,()=>{
    console.log("app 3000 portunda dinlenilir..")
})