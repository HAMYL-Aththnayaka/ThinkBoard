const express = require('express')
const router = express.Router();
const {getAllNotes , createNotes,updateNotes,deleteNotes,getNOteByID} = require('../Controllers/notesControllers.js')

router.get('/',getAllNotes)
router.get('/:id',getNOteByID)
router.post('/',createNotes)
router.put('/:id',updateNotes)
router.delete('/:id',deleteNotes)


module.exports = router