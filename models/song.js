const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const SongSchema = new Schema({
  youTubeHash: { type: String, required: true },
  // contributor of this specific song
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true,
  // }
});

module.exports = mongoose.model('Song', SongSchema);