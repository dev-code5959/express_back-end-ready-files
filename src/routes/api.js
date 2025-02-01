const express = require("express");
const router = express.Router();
const HelloController = require("../controllers/HelloController");
const StudentsController = require("../controllers/StudentsControllers");
const JWTController = require("../controllers/JWTPratice");
const TokenVerifyController = require("../middleWare/TokenVerifyMiddleware.js");
const TokenIssuerController = require("../controllers/TokenIssueController");
//This is my first get routing
router.get('/hello-get', HelloController.helloGet)
router.post('/hello-post', HelloController.helloPost)



//apply jwt token

router.get('/TokenIssue',TokenIssuerController.TokenIssue)
router.post('/insertStudent',TokenVerifyController,StudentsController.insertStudent)
router.get('/ReadStudent',TokenVerifyController,StudentsController.ReadStudent)
router.post('/UpdateStudent/:id',TokenVerifyController,StudentsController.UpdateStudent)
router.get('/DeleteStudent/:id',TokenVerifyController,StudentsController.DeleteStudent)


//jwt token create

router.get('/CreateToken',JWTController.createToken)
//jwt decode token
router.get('/DecodeToken/',JWTController.DecodeToken)


module.exports = router;