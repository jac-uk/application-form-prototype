const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching
router.post('/iteration-august-15/legal/key-contacts', function (req, res) {
    let over18 = req.session.data['legal']
    if (over18 === 'false') {
        res.redirect('/iteration-august-15/non-legal/key-contacts')
    } else {
        res.redirect('/iteration-august-15/legal/key-contacts')
    }
})

router.post('/iteration-august-12/legal/length', function (req, res) {
    let over18 = req.session.data['legal']
    if (over18 === 'false') {
        res.redirect('/iteration-august-12/non-legal/length')
    } else {
        res.redirect('/iteration-august-12/legal/length')
    }
})

module.exports = router