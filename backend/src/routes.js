const express = require('express');
const routes = express.Router();
const ProfileController = require('../src/controllers/ProfileController');
const ProfileemployeeController = require('../src/controllers/ProfileemployeeController');
const CategoryController = require('../src/controllers/CategoryController');
const AdvertsController = require('../src/controllers/AdvertsController');
const SessionController = require('../src/controllers/SessionController');

routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfileController.index);
routes.post('/profile', ProfileController.create);

routes.get('/profileemployee', ProfileemployeeController.index);
routes.post('/profileemployee', ProfileemployeeController.create);

routes.get('/category', CategoryController.index);
routes.post('/category', CategoryController.create);

routes.get('/adverts', AdvertsController.index);
routes.post('/adverts', AdvertsController.create);
routes.delete('/adverts/:id', AdvertsController.delete);



module.exports = routes;