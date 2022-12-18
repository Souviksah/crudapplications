const express = require('express');

const ApiRoute = express.Router();
const ApiController = require('../controller/ApiController')



ApiRoute.get('/getData', ApiController.getdata);
ApiRoute.post('/storeData', ApiController.storedata);




module.exports = ApiRoute;