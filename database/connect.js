const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jobFerret');

module.exports = mongoose;