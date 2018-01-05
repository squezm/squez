var mongoose = require('mongoose');
//connect to database
var dbpassword = 'orion5SKY'; //hide using environment variable
var mongolabURI = 'mongodb://squezm:'+dbpassword+'@ds133627.mlab.com:33627/heroku_g5p0bbbv';
var mongoDB = 'mongodb://localhost/marks_database';
//process.env.PRODUCTION === true ? connect to mongolab : connect to local mongodb server
//heroku config:set PRODUCTION = true or heroku config:get PRODUCTION
//mongoose.connect(mongolabURI, {useMongoClient: true});
process.env.PRODUCTION == 'development' ? console.log('Development environment.') : console.log('Production environment.');
mongoose.connect(mongolabURI, {useMongoClient: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB had a connection error.'));
db.on('connected', function(){console.log('Connected to MongoDB.')});

//should split connection and require('./model') into the connection.js file
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  age: {
    type: Number,
    min: 18,
    max: 99,
    required: [true, 'Tell us your age please!']
  },
  date_joined: Date
});

var CommentSchema = new Schema({
  name: String,
  rating: Number,
  content: String
});

mongoose.model('UserModel', UserSchema, 'usermodels');
mongoose.model('CommentModel', CommentSchema, 'commentmodels');
