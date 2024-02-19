const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { MongoClient } = require('mongodb')

const app = express()
const PORT = process.env.PORT || 3000

// Database connection string
const url = 'mongodb://localhost:27017'
const dbName = 'your_database_name'

// Middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

// Routes
app.post('/login', async (req, res) => {
  const { username, password } = req.body

  // Connect to the database
  const client = new MongoClient(url)

  try {
    await client.connect()
    const db = client.db(dbName)
    const collection = db.collection('users')

    // Find user by username and password
    const user = await collection.findOne({ username, password })

    if (user) {
      // Set a session cookie
      res.cookie('session', 'your_session_id', { httpOnly: true })
      res.send('Login successful')
    } else {
      res.status(401).send('Invalid username or password')
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  } finally {
    await client.close()
  }
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
