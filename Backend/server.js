if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config('')
}
var nodemailer = require('nodemailer');
// import { SMTPClient } from 'emailjs';
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConfig = require('./database/db');

// Express Route
const indexRoute = require('./routes/formRoute')

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/', indexRoute)

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
// app.use((req, res, next) => {
//   next(createError(404));
// });

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});


//email js automatic sending
/* const client = new SMTPClient({
	user: 'geepy',
	password: 'RICHGIFT196897',
	host: 'smtp.geepytechnologies@gmail.com',
	ssl: true,
});
 */
// send the message and get a callback with an error or details of the message that was sent
/* client.send(
	{
		text: 'i hope this works',
		from: 'bstringz6@gmail.com',
		to: 'geepytechnologies@gmail.com',
		cc: '',
		subject: 'testing emailjs',
	},
	(err, message) => {
		console.log(err || message);
	}
); */

// nodemailer
/* var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
	  user: 'geepytechnologies@gmail.com',
	  pass: 'RICHGIFT196897'
	}
  });
  
  var mailOptions = {
	from: 'geepytechnologies@gmail.com',
	to: 'bstringz6@gmail.com',
	subject: 'Sending Email using Node.js',
	text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
	if (error) {
	  console.log(error);
	} else {
	  console.log('Email sent: ' + info.response);
	}
  }); */