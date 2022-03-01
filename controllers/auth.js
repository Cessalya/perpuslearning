const express = require('express')
const router = express.Router()

router.post('/login', function (req, res) {
    let credentials = {
        username: req.body.username,
        password: req.body.password
    }

    if (!credentials.username || !credentials.password) {
        return res.send('Username dan/atau Password harus diisi!')
    }

    if (credentials.username != 'admin' || credentials.password != 'admin') {
        return res.send('Username dan/atau Password tidak sesuai')
    }
    
    return res.send('Selamat datang kembali Administrator')
})

module.exports = router