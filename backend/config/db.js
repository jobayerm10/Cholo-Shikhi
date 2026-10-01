const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI

const connectDB = async () => {
  if (!MONGO_URI) {
    console.warn('MONGO_URI is not set — skipping database connection (check backend/.env)')
    return null
  }

  try {
    mongoose.set('strictQuery', true)

    const conn = await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    })

    console.log(`MongoDB connected: ${conn.connection.host}/${conn.connection.name}`)

    mongoose.connection.on('error', (err) => {
      console.error(`MongoDB connection error: ${err.message}`)
    })
    mongoose.connection.on('disconnected', () => {
      console.warn('MongoDB disconnected')
    })

    return conn
  } catch (error) {
    console.warn(`MongoDB not connected: ${error.message}`)
    console.warn('Server will keep running — /api/health will show database: "disconnected"')
    return null
  }
}

module.exports = connectDB
