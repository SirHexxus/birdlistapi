// Import our Controllers
const birdController = require('../controllers/birdController');

const routes = [
    {
        method: 'GET',
        url: '/api/birds',
        handler: birdController.getBirds
    },
    {
        method: 'GET',
        url: '/api/birds/:id',
        handler: birdController.getSingleBird
    },
    {
        method: 'POST',
        url: '/api/birds',
        handler: birdController.addBird
    },
    {
        method: 'PUT',
        url: '/api/birds/:id',
        handler: birdController.updateBird
    },
    {
        method: 'DELETE',
        url: '/api/birds/:id',
        handler: birdController.deleteBird
    }
];

module.exports = routes;
