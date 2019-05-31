const express = require('express')
require('../util/util')
router = new express.Router


router.get('/hcm_api',(req,res)=>{
    if(!req.query.assignmentRecordId){
        return res.status(400).json({error:{message: 'Please inform an asset', code: 400}})
    }
const assignmentRecordId = req.query.assignmentRecordId.toUpperCase()

getData(assignmentRecordId,(err,data)=>{
    if(err){
        return res.status(err.code).json({error:{ message:'Generic error',code: 500}})
    }
    res.status(200).json(data)
})
})

module.exports = router