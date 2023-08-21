import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    description:String,
    tags:[String],
    likeCount:{
        type: Number,
        default:0
    },
    createdOn:{
        type:Date,
        default: new Date()
    }
})

const postMessage = mongoose.model('postMessage', postSchema);
export default postMessage;