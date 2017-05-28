import express from 'express';
import path from 'path';
import cors from 'cors';

// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var parseString = require('xml2js').parseString;


const app = express();
app.use(express.static('src/public'));
app.use(cors());



app.get('/',(req, res) =>{
  res.sendFile('index.html');
});

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200){
//     parseString(xhr.responseText, function(err, result) {
//       console.log(result.nlmSearchResult.list[0].document[0]);
//     });
//   }
// };
// // parseString(xhr, function(err, result) {
// //   console.dir(result);
// // });
// xhr.open('GET', "https://wsearch.nlm.nih.gov/ws/query?db=healthTopics&term=title:asthma&retmax=5", true);
// xhr.send();

app.listen(3001,()=>console.log("Listening on port 3001"));
