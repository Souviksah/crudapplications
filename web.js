const express = require('express')

const Home_Route = express.Router();
const HomeController = require('../controller/HomeController')


Home_Route.get('/', HomeController.index);
Home_Route.get('/create', HomeController.create);
Home_Route.post('/store', HomeController.store);
Home_Route.get('/edit-product/:p_id', HomeController.Editproduct);
Home_Route.post('/update-product', HomeController.update);
Home_Route.get('/delete-product/:p_id', HomeController.delete);





module.exports = Home_Route