const express = require('express');
const router = express.Router();
const {getAllTasks, createTasks, deleteTask, findTask, updateTask} = require('../Controllers/Tasks');

router.route('/').get(getAllTasks).post(createTasks);;
router.route('/:id').delete(deleteTask).get(findTask).patch(updateTask);

module.exports = router;