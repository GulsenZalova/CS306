const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
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


let UserSchema=mongoose.Schema({
    name:String,
    surname:String,
    email:String,
    age:Number,
    password:String
})



const ProductModel= mongoose.model("product",ProductSchema)
const UserModel= mongoose.model("user",UserSchema)


let ProductsValidationSchema= Joi.object({
    name:Joi.string().min(2).max(50).trim().required(),
    image:Joi.string().uri().required(),
    isSale:Joi.boolean().required(),
    rate:Joi.number().min(1).max(5).required(),
    price:Joi.number().positive().min(1).max(1000).required(),
    discount:Joi.number().min(10).max(85).required()
})

let UserValidationScheam=Joi.object({
    name:Joi.string().min(3).max(15).trim().required(),
    surname:Joi.string().min(5).max(15).trim().required(),
    email:Joi.string().email().required(),
    age:Joi.number().positive().integer().max(100).required(),
    password:Joi.string().min(10).max(20).required()
})



app.get("/users",async(req,res)=>{
    let users= await UserModel.find()
    res.send(users)
})







app.post("/users/register",async (req,res)=>{
    let result= UserValidationScheam.validate(req.body)
    let{email,age,surname,password,name}=req.body
    if(result.error){
      let errorMessage=result.error.details[0].message
       return res.send(errorMessage)
    }

    let user= await UserModel.findOne({email:email})

    if(user){
      return  res.send("Bu user var!!!")
    }
        let hashpassword=  await bcrypt.hash(password,10)
    console.log(hashpassword)
    let newUser= new UserModel({
        name,
        surname,
        email,
        age,
        password:hashpassword
    })
    await  newUser.save()
     res.send(newUser)
})



app.post("/users/login",async(req,res)=>{
    let {email,password} =req.body
    let user= await UserModel.findOne({email:email})
    if(!user){
        return res.send("registersiyadan kecmemsiniz")
    }

  let isTruePassword= await bcrypt.compare(password,user.password)


  if(!isTruePassword){
      return res.send("password yalnisdir!!!")
  }


   let token= jwt.sign({_id:user._id},process.env.SecretKey)
   res.send(token)

})






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
    let result= ProductsValidationSchema.validate(req.body)
    
  if(result.error){
    let errorMessage=result.error.details[0].message
     return res.send(errorMessage)
  }
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