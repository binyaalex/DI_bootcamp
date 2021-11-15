const exp = require('express');

const app = exp();

app.listen(3000, ()=>{
  console.log('listen to port 3000');
})

app.get('/', (req,res)=>{
  res.end('<h1>hello</h1>')
})