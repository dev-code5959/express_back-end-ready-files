const mongoose = require('mongoose');

const {Schema} = mongoose;

const DemoModel = new Schema({


    Name:String,
    Roll:Number,
    Class:String,
    Remarks:String,
    Adult:Boolean,
    comments:[],
    Details:{},
    dov:Date

})


const demoModel = mongoose.model('demo',DemoModel);

module.exports = demoModel;