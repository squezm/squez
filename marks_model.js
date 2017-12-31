var mongoose = require('mongoose');
//connect to database
var mongoDB = 'mongodb://localhost/marks_database';
mongoose.connect(mongoDB, {useMongoClient: true});
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

mongoose.model('UserModel', UserSchema, 'usermodels');
