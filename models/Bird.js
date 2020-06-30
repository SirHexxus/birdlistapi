const mongoose = require('mongoose');

const birdSchema = new mongoose.Schema({
    family: {
        type: String,
        lowercase: true,
        trim: true
    },
    species: {
        type: String,
        lowercase: true,
        trim: true
    },
    commonName: {
        type: String,
        lowercase: true,
        trim: true
    },
    shortCode: {
        type: String,
        lowercase: true,
        trim: true
    },
    season: {
        type: String,
        lowercase: true,
        trim: true
    },
    lifer: Boolean,
    years: [Number],
    notes: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Bird', birdSchema);