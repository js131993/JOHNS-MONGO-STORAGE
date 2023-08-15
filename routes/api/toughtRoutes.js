const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addThought,
  removeThought,
} = require('../../controllers/studentController');

// /api/students
router.route('/').get(getThoughts).post(createThought);

// /api/students/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/students/:thoughtId/assignments   (below is the question.....)
router.route('/:thoughtId/assignments').post(addThought);

// /api/students/:thoughtId/assignments/:assignmentId
router.route('/:thoughtId/assignments/:assignmentId').delete(removeThought);

module.exports = router;
