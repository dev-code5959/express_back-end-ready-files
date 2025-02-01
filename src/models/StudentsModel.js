const mongoose = require('mongoose')
const { Schema } = mongoose;
const DataSchema = new Schema({
    Name:{
        type: String, required: true
    },
    Roll: {
        type:Number,
        required: true,
        default:0,
        validate: {
            validator:function(value){
                if(value>=6&&value<=12){
                    return true
                } else{
                    return false;
                }
            },
            message: 'Roll number would be min 6 to 12'

        }

    },
    Class: {type:String,required:true},
    Mobile:{
        type:String,
        required:true,
        validate:{
            validator:function(value){
               return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value)

            },
            message:"Invalid Bangladeshi Mobile Number"
        }

    }
    ,
    Remarks:{
        type:String,
        default:'No Remarks '
    },
},{versionKey:false});



const StudentsModel = mongoose.model('students',DataSchema);

module.exports = StudentsModel;