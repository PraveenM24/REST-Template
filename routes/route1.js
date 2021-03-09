const express = require('express')
const router = express.Router()
const Model = require('../models/model1')

router.get('/', async(req, res) => {
    try {
        const values = await Model.find()
        res.json(values)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const value = await Model.findById(req.params.id)
        res.json(value)
    } catch (err) {
        res.send('Error ' + err)
    }
})


router.post('/', async(req, res) => {
    const values = new Model({
        empname: req.body.empname,
        empid: req.body.empid,
        email: req.body.email,
        tech: req.body.tech,
        team: req.body.team,
        age: req.body.age,
        experience: req.body.experience,
        salary: req.body.salary
    })

    try {
        const a1 = await values.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }
})

router.patch('/:id', async(req, res) => {
    try {
        const value = await Model.findById(req.params.id)
        value.sub = req.body.sub
        const a1 = await value.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const value = await Model.findById(req.params.id)
        value.sub = req.body.sub
        const a1 = await value.remove()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }
})


module.exports = router