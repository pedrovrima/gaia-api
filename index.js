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
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
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
  autu_controller.create_autu(req, res);
});

app.get("/get_species", (req, res) => {
  species_controller.get_species(req, res);
});

app.listen(process.env.PORT || 5000);
