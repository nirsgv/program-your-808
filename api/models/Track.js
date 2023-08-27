const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const trackSchema = new mongoose.Schema({
  artist: {
    type: String,
    trim: true,
  },
  track: {
    type: String,
    trim: true,
  },
  color: {
    type: String,
    trim: true,
  },
  genre: {
    type: String,
    trim: true,
  },
  year: {
    type: String,
    trim: true,
  },
  label: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },
  id: {
    type: Number,
    trim: true,
  },
  tempo: {
    type: Number,
    trim: true,
  },
  parts: {
    type: [],
  },
});

module.exports = mongoose.model("Track", trackSchema);
