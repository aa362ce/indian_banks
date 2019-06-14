// Initializes the `banks` service on path `/banks`
const createService = require('feathers-sequelize');
const createModel = require('../../models/banks.model');
const hooks = require('./banks.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/banks', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('banks');

  service.hooks(hooks);
};
