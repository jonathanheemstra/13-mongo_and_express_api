'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = Schema({
  name: { type: String, required: true},
  rating: { type: Number, required: true},
  timestamp: { type: Date, required: true},
  directorID: { type: Schema.Types.ObjectId, required: true}
});

module.exports = mongoose.model('movie', movieSchema);
