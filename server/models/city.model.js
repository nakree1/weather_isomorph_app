const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: {
    type: String,
    required: true, max: 100
  },
  weather: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Weather'
    }
  ]
});


module.exports = mongoose.model('City', CitySchema);