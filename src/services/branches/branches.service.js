// Initializes the `branches` service on path `/branches`
const createService = require('feathers-sequelize');
const createModel = require('../../models/branches.model');
const hooks = require('./branches.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate:{
      default:20,
      max:300
    }
  };

  // Initialize our service with any options it requires
  app.use('/branches', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('branches');

  service.hooks(hooks);
};
