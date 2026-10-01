const mongoose = require('mongoose')

const DB_STATES = {
  0: 'disconnected',
  1: 'connected',
  2: 'connecting',
  3: 'disconnecting',
}

const getHealth = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    uptime: Math.round(process.uptime()),
    environment: process.env.NODE_ENV || 'development',
    database: DB_STATES[mongoose.connection.readyState] || 'unknown',
  })
}

module.exports = { getHealth }
