const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vincent:1202@2021-utc-p3.je1t9.mongodb.net/PhoTaco', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;

///done 