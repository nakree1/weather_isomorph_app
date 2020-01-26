const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 100
  }
});

if (!CitySchema.options.toObject) {
  CitySchema.options.toObject = {};
}

CitySchema.options.toObject.transform = function(doc, ret) {
  return { name: ret.name, id: ret._id };
};

module.exports = mongoose.model('City', CitySchema);
