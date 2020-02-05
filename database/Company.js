const mongoose = require('./connect.js');
mongoose.Promise = global.Promise;

let contactSchema = mongoose.Schema({
  contactType: String,
  date: Date,
  result: String
});

let jobSchema = mongoose.Schema({
  description: String,
  url: String,
  contactPerson: String,
});

let contactPersonSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  contacts: [contactSchema]
});

let appointmentSchema = mongoose.Schema({
  date: Date,
  description: String,
  result: String
});

let companySchema = mongoose.Schema({
  name: String,
  description: String,
  address:  String,
  city: String,
  state: String,
  zip: String,
  contactPersons: [contactPersonSchema],
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: { type: Date, required: true, default: Date.now }
});

let Company = mongoose.model('Company', companySchema);

var getAll = () => {
  let query = Company.find({ });
  return query.exec();
};

var getOne = (name) => {
  let query = Company.find({ name: name });
  return query.exec();
};

var getManyByName = (name) => {
  let query = Company.find({ name: new RegExp(name, 'i') });
  return query.exec();
};

module.exports = Company;
module.exports.getAll = getAll;
module.exports.getOne = getOne;
module.exports.getManyByName = getManyByName;