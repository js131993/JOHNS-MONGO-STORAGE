const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Assignment');

// Schema to create Student model
const studentSchema = new Schema(
  {
    
  },
  {
    toJSON: {
      getters: true,
    },
  }
);


module.exports = Student;
