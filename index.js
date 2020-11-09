const express = require("express");
var bodyParser = require("body-parser");
var species_controller = require("./controllers/species");
var autu_controller = require("./controllers/autu");
var cors = require("cors");

// configure the app to use bodyParser()
console.log("start");
const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  if ('OPTIONS' === req.method) {
      res.status(204).send();
  }
  else {
      next();
  }
});
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome to Gaia API");
});
app.get("/favicon.ico", function (req, res) {
  res.sendStatus(204);
});

app.post("/create_spp", (req, res) => {
  console.log("start");

  species_controller.create_species(req, res);
});

app.post("/create_autu", (req, res) => {
  console.log(res.header,)
  autu_controller.create_autu(req, res);
});

app.get("/get_species", (req, res) => {
  species_controller.get_species(req, res);
});

app.listen(process.env.PORT || 5000);
