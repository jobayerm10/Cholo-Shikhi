require('dotenv').config()

const express = require('express')
const cors = require('cors')

const connectDB = require('./config/db')
const healthRoutes = require('./routes/healthRoutes')
const { notFound, errorHandler } = require('./middleware/errorHandler')

const app = express()

const PORT = process.env.PORT || 5000
const CLIENT_URL = process.env.CLIENT_URL || '*'

// --- Global middleware ---
app.use(
  cors({
    origin: CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// --- Routes ---
app.get('/api', (req, res) => {
  res.json({
    success: true,
    message: 'Cholo Shikhi API',
    version: '1.0.0',
  })
})

app.use('/api/health', healthRoutes)

// --- 404 + error handler (must be last) ---
app.use(notFound)
app.use(errorHandler)

// --- Start server ---
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
  console.log(`CORS origin: ${CLIENT_URL}`)
  connectDB()
})
