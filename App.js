const connectDB = require("./DB/Connect");
const express = require('express');
const app = express();
const Tasks = require('./Routes/Task');
const notFound = require('./Middleware/NotFound')
const errorHandler = require('./Middleware/errorhandler')
require('dotenv').config();

//Middleware
app.use(express.json());

//Routes
app.get('/hello', (req,res)=>{
    res.send("Hello Sapna!") 
})

app.use('/api/v1/tasks', Tasks);
app.use(notFound)
app.use(errorHandler)


const port = 3000;

const start = async ()=>{
try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log('server is listening at port ' + port));
    
} catch (error) {
    console.log(error);
}}

start();