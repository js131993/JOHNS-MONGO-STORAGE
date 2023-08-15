const { ObjectId } = require('mongoose').Types;
const { Student, Course } = require('../models');

// Aggregate function to get the number of students overall
const headCount = async () => {
  const numberOfStudents = await Student.aggregate()
    .count('studentCount');
  return numberOfStudents;
}

// Aggregate function for getting the overall grade using $avg
const grade = async (studentId) =>
  Student.aggregate([
    
  ]);

module.exports = {
  // Get all students
  async getStudents(req, res) {
    
  },

  // Get a single student
  async getSingleStudent(req, res) {
    
  },

  // create a new student
  async createStudent(req, res) {
    
    
  },
  // Delete a student and remove them from the course
  async deleteStudent(req, res) {
    
    
  },

  // Add an assignment to a student
  async addAssignment(req, res) {
    console.log('You are adding an assignment');
    console.log(req.body);


  },
  // Remove assignment from a student
  async removeAssignment(req, res) {
    
  }
}
