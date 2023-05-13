const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect();
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
    type: String,
    trim: true,
    unique: true, // Ensure id field is unique
  },
  tempo: {
    type: Number,
    trim: true,
  },
  parts: [],
});

module.exports = mongoose.model("Track", trackSchema, "tracks");
