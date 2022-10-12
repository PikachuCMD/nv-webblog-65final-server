const { Camera } = require('../models')

module.exports = {

    async create(req, res) {
        try {
            const camera = await Camera.create(req.body)
            res.send(camera.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Camera incorrect'
            })
        }
    },

    async put(req, res) {
        try {
            await Camera.update(req.body, {
                where: {
                    id: req.params.cameraId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Camera incorrect'
            })
        }

    },

    async remove(req, res) {
        try {
            const camera = await Camera.findOne({
                where: {
                    id: req.params.cameraId
                }
            })
            if (!camera) {
                return res.status(403).send({
                    error: 'The Camera information was incorrect'
                })
            }
            await Camera.destroy()
            res.send(camera)
        } catch (err) {
            res.status(500).send({
                error: 'The Camera information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const camera = await Camera.findByPk(req.params.cameraId)
            res.send(camera)
        } catch (err) {
            res.status(500).send({
                error: 'The camera information was incorrect'
            })
        }
    },

    async index(req, res) {
        try {
            const Cameras = await Camera.findAll()
            res.send(Cameras)
        } catch (err) {
            res.status(500).send({
                error: 'The cameras information was incorrect'
            })
        }
    }

}