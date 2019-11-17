const Planet = require('../models/Planet');

class Earth extends Planet {}

const earth = new Earth('Earth', 6371);
module.exports = earth;
