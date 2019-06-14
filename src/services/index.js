const banks = require('./banks/banks.service.js');
const branches = require('./branches/branches.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(banks);
  app.configure(branches);
};
