const express = require("express");
const app = express();

app.get('/api/get',(req,res) => {
    res.send({message:'Hello world'})
})

app.get('/api/get-user',(req,res) => {
    res.send({message:'Hello user'})
})

app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});