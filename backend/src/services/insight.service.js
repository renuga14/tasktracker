const mongoose = require('mongoose')
const Task = mongoose.model('Task')

const getInsights = async (req, res) => {
  try {
    const totalOpen = await Task.countDocuments({ status: 'Open' })
    const dueSoon = await Task.countDocuments({
      due_date: { $lte: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) },
      status: { $ne: 'Done' }
    })

    const priorityCounts = await Task.aggregate([
      { $group: { _id: '$priority', count: { $sum: 1 } } }
    ])

    let dominantPriority = 'Medium'
    const highCount = priorityCounts.find(p => p._id === 'High')?.count || 0
    const totalCount = priorityCounts.reduce((acc, p) => acc + p.count, 0)
    if (totalCount && highCount / totalCount > 0.5) dominantPriority = 'High'

    let summary = `You have ${totalOpen} open tasks.`
    if (dueSoon > 0) summary += ` ${dueSoon} are due in the next 3 days.`
    summary += ` Most of your tasks are ${dominantPriority} priority.`

    res.status(200).json({ totalOpen, dueSoon, priorityCounts, summary })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = { getInsights }
