const {model} = require('mongoose');

const {OrdersSchema} = require('../schema/OrdersSchema');

const OrdersModel = model('Order', OrdersSchema);

module.exports = {OrdersModel};