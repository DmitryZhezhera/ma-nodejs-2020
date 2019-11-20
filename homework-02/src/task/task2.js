const Planet = require('../models/Planet');

class CEarth extends Planet {}

const Earth = new CEarth('Earth', 6371);
module.exports = Earth;
