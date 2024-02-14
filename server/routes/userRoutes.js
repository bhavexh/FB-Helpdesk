const {Router} = require("express");
const router = Router();
const {signupUser, loginUser, logoutUser} = require('../controllers/userController');
const protectRoutes = require("../middlewares/protectRoutes");



router.post('/signup', signupUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);



module.exports = router;