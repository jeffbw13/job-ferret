const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('../database/connect.js');
const Company = require('../database/Company.js');

let app = express();
let port = 3000;

app.use(express.static(__dirname + '/../public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

//  get all laundromats (for testing)
app.get('/company/all', function (req, res) {
  Company.getAll()
  .then((companies) => {
    res.write(JSON.stringify(companies));
    res.end();
  })
  .catch((err) => {
    console.log('Error: ', err);
    res.status(500).send(new Error(err));
    res.end();
  });
});

app.get('/company/:name', function (req, res) {
  var name = req.params.name;
  Company.getOne(company)
  .then((company) => {
    res.write(JSON.stringify(company));
    res.end();
  })
  .catch((err) => {
    console.log('Error in get company: ', err);
    res.status(500).send(new Error(err));
    res.end();
  });
});

app.get('/company/ManyByName/:name', function (req, res) {
  var name = req.params.name;
  Company.getManyByName(name)
  .then((companies) => {
    res.write(JSON.stringify(companies));
    res.end();
  })
  .catch((err) => {
    console.log('Error in get companies by name: ', err);
    res.status(500).send(new Error(err));
    res.end();
  });
});

app.post('/company', function (req, res) {
  const company = req.body;
  console.log('company: ', company);
  Company.add(company)
  .then((response) => {
    res.write(JSON.stringify(response));
    res.end();
  })
  .catch((err) => {
    console.log('Error in adding new company: ', err);
    res.status(500).send(new Error(err));
    res.end();
  });
});

//  need put

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});