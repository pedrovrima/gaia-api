const express = require('express');
// const { Models } = require('./app/models');
var bodyParser = require('body-parser');
// var species_controller = require('./controllers/species')
// var autu_controller = require('./controllers/autu')

// configure the app to use bodyParser()
console.log("start")
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
res.send("helo")
}

// app.post('/create_spp', ( req,res) => {
//   console.log("start")

//   species_controller.create_species(req,res);
// });


// app.post('/create_autu', ( req,res) => {
// autu_controller.create_autu(req,res)});




// app.get('/get_species',(req,res)=>{
//   species_controller.get_species(req,res)
// })


app.listen(3000);
