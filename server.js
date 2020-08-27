

const express = require('express');
const bodyParser = require('body-parser');
var Client = require('ftp');
var fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;

const nodemailer = require("nodemailer");
const morgan = require('morgan');
const router = require("express").Router();
const path = require("path");
// aws bucket
const AWS = require('aws-sdk');
require('dotenv').config();
const Busboy = require('busboy');
const busboy = require('connect-busboy');
const busboyBodyParser = require('busboy-body-parser')
const cors = require('cors')
app.use(cors());

app.use(morgan('dev'));

app.use(busboy())
app.use(busboyBodyParser())


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var knex = require('knex')({
  client: 'postgres',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'Pass1234',
    database: 'postgres'
  }
});




app.get('/getforms', function (req, response) {
  knex.select().from('all_forms').returning('*').then(data => {
    response.send(JSON.stringify({ data }))
  })
});





app.post('/createform', function (req, res) {
  const { name, date } = req.body;
  knex('all_forms').insert({
    name: name,
    date: date
  }).then(res.send('POST request to the homepage'))

  // posts.push(data)


}
);


app.delete('/delete', function (req, response) {
  console.log("hiiiii")
  const id = req.body.id;
  console.log(id);
  knex('all_forms').where('id', id).del().then(response.send('deleted item'))
})



if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}


app.listen(port, () => console.log(`Listening on port ${port}`));
    // console.log('Application running!' + cluster.worker.id);
    // }