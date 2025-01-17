// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const banks = sequelizeClient.define('banks', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    },
    timestamps: false
  });

  // eslint-disable-next-line no-unused-vars
  banks.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return banks;
};
