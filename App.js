// const http = require('http');

// const server = http.createServer((req, res)=>{
//   console.log("Server created");
//   res.end("hello world");
// })

// server.listen(3001,"localhost", ()=>{
//   console.log("server is running on 3001")
// })


// const express = require('express');
// const app = express();
// const PORT = 3001;
// const cors = require('cors')
// const data = require('./data.js')

// app.use(cors())
// app.get('/about', (req, res) =>{
//   res.json("about page")
// })


// app.get('/', (req, res) =>{
//   res.json(data)
// })


// app.listen(PORT, ()=>{
//   console.log("server is running on" + PORT)
// })


const express = require('express')
const app = express()
const port = 3001;



app.listen(port, ()=>{
  console.log("serveris running on port" + port)
})