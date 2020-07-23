const router = require('express').Router()

const db = require('./queries')

router.get('/', (req, res) => {
    res.json({info: "Node.js, Express, and Postgres API"})
})

router.get('/users', db.getUsers)
router.get('/users/:id', db.getUserById)
router.post('/users', db.createUser)
router.put('/users/:id', db.updateUser)
router.delete('/users/:id', db.deleteUser)

module.exports = router;