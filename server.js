const express=require('express');
const app=express();
const mongoose=require('mongoose');
const Product=require('./models/productModel')
const db=require('./config/db')
db();

//Middlewares
app.use(express.json());  // Parses JSON data from the request body.
app.use(express.urlencoded({extended:true})); // Parses form data from the request body.

// Routes - HTTP requests
// GET
app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/blogs',(req,res)=>{
    res.send('Blog Post');
})

app.get('/product',async(req,res)=>{
    try{
        const product = await Product.find();
        res.status(200).json(product);
    }
    catch(err){
        console.log(err);
    }
})
app.get('/product/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }
    catch(err){
        console.log(err);
    }
})

// POST
app.post('/product',async(req,res)=>{
    try{
        const product = await Product.create(req.body);
        res.status(500).json(product);
    }
    catch(err){
        console.log(err);
    }
})

// PUT
app.put('/product/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            return res.status(404).send('Product not found');
        }
        res.status(200).json(product);
    }
    catch(err){
        console.log(err);
    }
})

// DELETE
app.delete('/product/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findByIdAndDelete(id);
        if(!product){
            res.status(404).send('Product not found');
        }
        res.status(200).json(product);
    }
    catch(err){
        console.log(err);
    }
})


app.listen(8000,()=>{
    console.log(`Connected to server on port 8000`);
})
