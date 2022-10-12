const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const CameraController = require('./controllers/CameraController')
const isAuthenController = require('./authen/isAuthenController') //ใช้เช็ค token
module.exports = (app) => {
    app.post('/user', UserController.create)

    app.put('/user/:userId', UserController.put)

    app.delete('/user/:userId', UserController.remove)

    app.get('/user/:userId', UserController.show)

    app.get('/users', UserController.index)

    app.post('/login',
            UserAuthenController.login
        )
        //create a new camera
    app.post('/camera',
            isAuthenController,
            CameraController.create
        )
        // edit camera, suspend, active
    app.put('/camera/:cameratId',
            isAuthenController,
            CameraController.put
        )
        // delete camera
    app.delete('/camera/:cameraId',
            isAuthenController,
            CameraController.remove
        )
        // get camera by id
    app.get('/camera/:cameraId',
            CameraController.show
        )
        // get all camera
    app.get('/cameras',
        isAuthenController,
        CameraController.index
    )



}