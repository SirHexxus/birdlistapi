// External Dependancies
const boom = require('boom');

// Get Data Models
const Bird = require('../models/Bird');

// Get all birds
exports.getBirds = async (req, res) => {
    try {
        const birds = await Bird.find();
        return birds;
    } catch (err) {
        throw boom.boomify(err);
    }
}

// Get single bird by ID
exports.getSingleBird = async (req, res) => {
    try {
        const id = req.params.id;
        const bird = await Bird.findById(id);
        return bird;
    } catch (err) {
        throw boom.boomify(err);
    }
}

// Add a new bird
exports.addBird = async (req, res) => {
    try {
        const bird = new Bird(req.body);
        return bird.save();
    } catch (err) {
        throw boom.boomify(err);
    }
}

// Update an existing bird
exports.updateBird = async (req, res) => {
    try {
        const id = req.params.id;
        const bird = req.body;
        const { ...updateData } = bird;
        const update = await Bird.findByIdAndUpdate(id, updateData, { new: true });
        return update;
    } catch (err) {
        throw boom.boomify(err);
    }
}

// Delete a bird
exports.deleteBird = async (req, res) => {
    try {
        const id = req.params.id;
        const bird = await Bird.findByIdAndRemove(id);
        return bird;
    } catch (err) {
        throw boom.boomify(err);
    }
}