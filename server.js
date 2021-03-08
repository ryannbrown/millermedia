

const express = require('express');
const helmet = require("helmet");
const bodyParser = require('body-parser');
var Client = require('ftp');
var fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;
const knex = require("knex")
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



 const db = knex({
     client: "pg",
     connection: process.env.CONNSTRING,
     searchPath: ["knex", "public"],
   });


  //local

// var db = require('knex')({
//   client: 'postgres',
//   connection: {
//     host: 'localhost',
//     user: 'postgres',
//     password: 'Pass1234',
//     database: 'postgres'
//   }
// });

app.get("/api/reviews/:param", (req, res) => {
    const {param } = req.params;
  console.log(param)
  db('reviews').where('blog_title', param)
  .then(review => {
    // console.log(review, "review")
    if (review.length) {
      // console.log(review)
      res.json(review)
    } else {
      res.status(400).json([])
    }
  })
  .catch(err => res.status(400).json('error getting review'))
  });



app.post('/api/postreview', function (req, response) {
  console.log(req.body);
  const { blog_id, blog_title, review_body, name, email, website } = req.body;
if (!name || !email || !review_body) {
  response.status(400).json('credentials not entered')
}

  db('reviews').insert([
    {
   date: new Date(),
   blog_id,
   blog_title,
   review_body,
   name,
   email,
   website
    }]).then(response.send('POST request to the homepage'))
  .catch(err => console.log(err))

})





// app.post('/createform', function (req, res) {
//   const { name, date } = req.body;
//   knex('all_forms').insert({
//     name: name,
//     date: date
//   }).then(res.send('POST request to the homepage'))

//   // posts.push(data)


// }
// );


// app.delete('/delete', function (req, response) {
//   console.log("hiiiii")
//   const id = req.body.id;
//   console.log(id);
//   knex('all_forms').where('id', id).del().then(response.send('deleted item'))
// })



if (process.env.NODE_ENV === 'production') {

  app.use(helmet({
    contentSecurityPolicy: false,
  }));
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