import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    description:{
        type: String
    },
    students:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const Course = mongoose.model('Course', courseSchema) || mongoose.modules.Course
export default Course