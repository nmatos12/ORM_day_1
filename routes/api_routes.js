// const path = require('path');
const router = require('express').Router();
const Course = require('../models/Course');

// Select all from course = return all courses
router.get('/courses', (req, res) => {
    Course.findAll().then(courses => {
        res.send(courses);
        console.log('nodemon rocks!');
    });
});

module.exports = router;