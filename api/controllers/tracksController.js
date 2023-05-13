const Track = require("../models/Track");
exports.getTracks = async (req, res) => {
  try {
    console.log("Fetching tracks...");
    const tracks = await Track.find();
    console.log("Tracks:", tracks);
    res.json(tracks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getTrack = async (req, res) => {
  try {
    const track = await Track.findOne({ id: req.params.id });
    console.log({ track });
    if (!track) {
      return res.status(404).json({ error: "Track not found" });
    }
    return res.json(track);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.test = async (req, res) => {
  try {
    const count = await Track.countDocuments();
    console.dir({Track});
    console.log({count});
    res.send(`Total tracks: ${count}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
