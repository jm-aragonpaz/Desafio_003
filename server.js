const fs = require("fs");
const express = require("express")
const app = express();
const port = process.env.PORT || 8080;

const Container = require("./classContainer");
const container = new Container("productos.json");

app.get('/', (req,res)=>{
    res.send("/productos retorna la lista de productos. /productoRandom, retorna un producto al azar")
})

app.get('/productos', async (req,res)=>{
    const productos = await container.getAll();
    res.send(productos);
})

app.get('/productoRandom', async (req,res)=>{
    const productos = await container.getAll()
    const rndNum = Math.floor(Math.random()*(Object.keys(productos).length)+1)
    const producto = await container.getById(rndNum)
    res.json(producto);
})

app.listen(port,()=>{
    console.log(`Example app listening on port http://localhost:${port}`)
})