const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
  due_date: { type: Date, required: true },
  status: { type: String, enum: ['Open', 'In Progress', 'Done'], default: 'Open' },
  created_at: { type: Date, default: Date.now }
})

const Task = mongoose.model('Task', taskSchema)

const createTask = async (data) => {
  const task = new Task(data)
  return await task.save()
}

const getAllTasks = async (filter = {}) => {
  const query = {}
  if (filter.status) query.status = filter.status
  if (filter.priority) query.priority = filter.priority

  const sort = {}
  if (filter.sortByDueDate) sort.due_date = filter.sortByDueDate === 'asc' ? 1 : -1

  return await Task.find(query).sort(sort)
}

const updateTask = async (id, data) => {
  return await Task.findByIdAndUpdate(id, data, { new: true })
}

module.exports = { createTask, getAllTasks, updateTask }
