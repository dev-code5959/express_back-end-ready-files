const StudentModel = require("../models/StudentsModel");




//CRUD
// c=create

exports.insertStudent= (req,res)=>{
  let reqBody = req.body;
    StudentModel.create(reqBody)
        .then((student)=>{
            res.status(201).json({status:"success",data:student})

        })
        .catch(error=>{
        res.status(400).json({status:"fail", error:error});
    })

}

//r = read student

exports.ReadStudent=(req,res)=>{
    let query = {};
    let projection = "Name Roll Class Remarks";

    StudentModel.find(query,projection,)
        .then((students)=>{
            res.status(201).json({status:"success",data:students})

        })
        .catch(error=>{
            res.status(400).json({status:"fail", error:error});
        })

}

//u = update student

exports.UpdateStudent= (req,res)=>{
    let id = req.params.id;
    let Query = {_id:id};
    let reqBody = req.body;
    StudentModel.updateOne(Query,reqBody)
        .then((student)=>{
            res.status(200).json({status:" data update success",data:student})
        })
        .catch(error=>{
        res.status(400).json({status:"data update fail", error:error});
    })
}

// d = delete
exports.DeleteStudent= (req,res)=>{
    let id = req.params.id;
    let Query = {_id:id};
    StudentModel.findByIdAndDelete(Query)
    .then((student)=>{
        res.status(200).json({status:"data delete success",data:student})
    })
        .catch(error=>{
            res.status(400).json({status:"data delete fail", error:error});
        })
}
