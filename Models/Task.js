const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    name:{
        type:String, 
        required:[true, "Name can't be blank"],
        trim:true, 
        maxlength:[50, "name can't be longer than 50 char"]}, 

    completed:{
        type:Boolean,
        default:false
        }
})
module.exports = mongoose.model('Task', TaskSchema);