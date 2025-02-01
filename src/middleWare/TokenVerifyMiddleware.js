const jwt = require("jsonwebtoken");


module.exports =(req,res,next)=>{
    let token =  req.headers['token-key'];
    jwt.verify(token,"SecretKey123",function (err,decoded){
        if(err){
            res.status(401).json({status:"Invalid Token",error:err});
        } else{
            next()
        }
    });

}