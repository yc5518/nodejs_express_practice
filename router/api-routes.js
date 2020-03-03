let router = require('express').Router();
let verifyToken = require('../middleware/verifyToken');
let userController = require('../controller/userController');
let authController = require('../controller/authController');
let routeController = require('../controller/routeController')

// APIs that do NOT require authentication
router.route('/register')
    .post(authController.new);

router.route('/login')
    .post(authController.login);

// APIs that require authentication
router.route('/me')
    .get(verifyToken, userController.view)
    .patch(verifyToken, userController.update)
    .put(verifyToken, userController.update);

router.route('/route')
    .post(verifyToken, routeController.new)
    .get(verifyToken, routeController.index)

router.route('/route/:route_id')
    .put(verifyToken, routeController.update)
    .get(verifyToken, routeController.view)
    .delete(verifyToken, routeController.delete);

// Export API routes
module.exports = router;