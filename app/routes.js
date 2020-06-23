const usersController = require('./controllers/users');
const { healthCheck } = require('./controllers/healthCheck');

const URL = '/api/v1';

exports.init = app => {
  app.get('/health', healthCheck);
  app.get(`${URL}/users`, usersController.getUsers);
};
