const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');

class SSM extends Model {}

SSM.init({
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    name: {
        type: DataTypes.STRING,
    }
}, {
    sequelize: connection,
    modelName: 'ssm'
});

module.exports = SSM;