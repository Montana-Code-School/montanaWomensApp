import express from 'express';
import path from 'path';
var bodyParser = require('body-parser');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var parseString = require('xml2js').parseString;
const app = express();
import cors from 'cors';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var router = express.Router();


// app.use(express.static('src/api.js'));
//
// app.get('/',(req, res) =>{
//   res.sendFile('index.html');
// });

var xhr = new XMLHttpRequest();


router.use(function(res, req, next) {
  console.log("something is happening");
  next();
})

router.get('/',function(req, res) {
  res.json({ message: "Hello, welcome to our api!"})
})

router.route('/info')

  .get(function(req, res) {
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200){
        parseString(xhr.responseText, function(err, result) {
          res.json(result.nlmSearchResult.list[0].document[0]);
        });
      }
    };
    // parseString(xhr, function(err, result) {
    //   console.dir(result);
    // });
    xhr.open('GET', "https://wsearch.nlm.nih.gov/ws/query?db=healthTopics&term=title:asthma&retmax=5", true);
    xhr.send();
  })

app.use('/api', router);
app.listen(3003,()=>console.log("Listening on port 3003"));
