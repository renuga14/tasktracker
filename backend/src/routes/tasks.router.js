const express = require('express')
const router = express.Router()
const { createTask, getAllTasks, updateTask } = require('../services/task.service')

router.post('/', async (req, res) => {
  try {
    const task = await createTask(req.body)
    res.status(201).json(task)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

router.get('/', async (req, res) => {
  try {
    const tasks = await getAllTasks(req.query)
    res.status(200).json(tasks)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const updatedTask = await updateTask(req.params.id, req.body)
    res.status(200).json(updatedTask)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

module.exports = router
