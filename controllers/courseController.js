const { Course, Student } = require('../models');

const { Course, Student } = require('../models');

module.exports = {
  // Get all courses
  async getCourses(req, res) {
    try {
      const courses = await Course.find();
      res.json(courses);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a course
  async getSingleCourse(req, res) {
    try {
      const course = await Course.findOne({ _id: req.params.courseId })
        .select('-__v');

      if (!course) {
        return res.status(404).json({ message: 'No course with that ID' });
      }

      res.json(course);
    } catch (err) {
      res.status(500).json(err);
    }
  },