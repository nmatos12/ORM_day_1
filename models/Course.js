const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');

class Course extends Model { }

Course.init({
    title: {
        type: DataTypes.STRING
    },
    instructor: {
        type: DataTypes.STRING
    },
    cost: {
        type: DataTypes.INTEGER
    }
},
{
    sequelize: connection,
    modelName: 'course'
});

module.exports = Course;