// step:1
const express = require("express");
const app = express();
const port = 5000;

// step:2
app.get("/", (req, res) => {
  res.send("hello from my first ever server");
});

// step:2
app.get("/data", (req, res)=>{
    res.send("data coming soon")
});

// step:3
app.listen(port, ()=>{
    console.log(`My first server is running on port: ${port}`)
});

// step: 4 :- open your project folder in terminal and type node index.js


