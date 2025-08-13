const {model} = require('mongoose');

const {PositionsSchema} = require('../schema/PositionsSchema');

const PositionsModel = model('Position', PositionsSchema);

module.exports = {PositionsModel};