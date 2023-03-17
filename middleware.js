const mongoose = require('mongoose')
const Search = require('./models/search')
var express = require('express');
var app = express()
console.clear();

const dbUrl='mongodb+srv://senolsahin2022:Gz0z3C4R1hdwEuhe@cluster0.w3zilfl.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedtopology: true})
.then((result) => console.log(''))
.catch((error) => console.log(''))

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get("/api/search/:keyword", async function(req,res) {

    const Keyword =req.query.keyword
    const jsonResult = {'status':'fail'}
  
    var counter = await Search.find({keyword: Keyword}).count();
    if(counter>0){

      var KeywordResult = await Search.find({keyword: Keyword});
      return res.json(KeywordResult[0].resultjson)

    }else{

      const b = require('./api/search/index.js');
      await b(encodeURIComponent(Keyword)).then(async function (response,err) {

        var GetJson = await response.json()
            const search = new Search({
                keyword: Keyword,
                resultjson : GetJson
    
             })
              search.save()
              .then((result) => {
                  return res.json(GetJson);
              })
             
             
          }).catch((err) => {
            return res.json(jsonResult);
         })

    }

   
  
   
  })


app.listen(8000,function(){
    console.log("Server started! port:8000")
});


