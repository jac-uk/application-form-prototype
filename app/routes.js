const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching
router.post('/iteration-august-12/legal/length', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    let over18 = req.session.data['legal']

    if (over18 === 'false') {
        res.redirect('/iteration-august-12/non-legal/length')
    } else {
        res.redirect('/iteration-august-12/legal/length')
    }
})

module.exports = router