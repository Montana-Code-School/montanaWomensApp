import express from 'express';
import path from 'path';
import cors from 'cors';



const app = express();
app.use(express.static('src/public'));
app.use(cors());

app.get('/',(req, res) =>{
  res.sendFile('index.html');
});


app.listen(3001,()=>console.log("Listening on port 3001"));
