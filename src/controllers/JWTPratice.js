var jwt = require('jsonwebtoken');

exports.createToken = (req,res)=>{
    let payload ={
        exp:Math.floor(Date.now() / 1000)+(20),
        data:{Name:"Rabill Hasan",City:"Dhaka",admin:true}
    }

    let Token = jwt.sign(payload,"SecretKey123")
    res.send(Token);

}
exports.DecodeToken = (req,res)=>{

  let token =  req.headers['token-key'];
  jwt.verify(token,"SecretKey123",function (err,decoded){
        if(err){
            res.status(401).json({status:"Invalid Token",error:err});
        } else{
            res.status(200).json({status:"Success",data:decoded});
        }
  });

}
