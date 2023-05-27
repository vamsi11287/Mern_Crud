const express = require("express")

const router = express.Router()

const {deletename,postname,updatename,getnames,getsinglename
} = require('../controller/namecontroller')

// get all data
router.get('/',getnames)
// get single data
router.get('/:id',getsinglename)
// post data
router.post('/',postname)
// update data
router.patch('/:id',updatename)
// delete data
router.delete('/:id',deletename)


module.exports = router