const express = require('express');
const router = express.Router();
const Place = require('../models/Place');

// Fetch all places
router.get('/', async (req, res) => {
  try {
    const places = await Place.find();
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// Fetch places by city
router.get('/city/:city', async (req, res) => {
  try {
    const city = req.params.city;
    const places = await Place.find({ City: city });
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
