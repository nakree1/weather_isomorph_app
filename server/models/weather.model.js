const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeatherSchema = new Schema({
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City'
  },
  date: {
    type: Date,
    required: true
  },
  temperature: {
    type: Number,
    required: true
  },
  scale: {
    type: String,
    required: true
  }
});

if (!WeatherSchema.options.toObject) WeatherSchema.options.toObject = {};
WeatherSchema.options.toObject.transform = function(doc, ret) {
  return {
    id: ret._id,
    cityId: ret.city,
    temp: ret.temperature,
    date: ret.date
  };
};

module.exports = mongoose.model('Weather', WeatherSchema);
