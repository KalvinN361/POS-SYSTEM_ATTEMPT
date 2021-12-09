const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://KalvinN361:Trithong59@cluster0.klkii.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;

///done 