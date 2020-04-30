const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');

// const MongoClient = require('mongodb').MongoClient;

const app = express()
const port = 3000

// Connection URL
const url = 'mongodb://localhost:27017/test';
// Database Name


mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const ChoiceSchema = new mongoose.Schema({
  text: { type: String, default: '' },
  count: {type: Number, default: 0}
});

const SurveySchema = new mongoose.Schema({
    text: { type: String, default: '' },
    date: { type: Date, default: Date.now },
    choices: [ChoiceSchema]
  });
const Survey = mongoose.model('Survey', SurveySchema);


// parse application/json
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('client/dist/client'))

app.get('/survey', (req, res)=>{
    Survey.find((err, result)=>{
      console.log(result);
      res.json(result);
    })
})

app.post('/survey', (req, res)=>{
    let survey = req.body;
    // users.push(user);
    const obj = new Survey();
    obj.text = survey.text
    obj.choices = survey.choices
    obj.save((error, result)=> {
        res.status(201).end();
    })

  //
});

   
    
    // res.json(users)



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

module.exports = {
    app
};


 // MongoClient.connect(url, function(err, client) {
    //     console.log("Connected successfully to server");
    //     const db = client.db(dbName);
    //     const collection = db.collection('users');
    //     collection.insertOne(user, (error, result)=>{
    //         if(error) throw error;
    //         console.log(result);
    //         res.status(201).end();
    //     });
    //   });
