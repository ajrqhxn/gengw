const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        title: { type: String, required:true },
        content: { type: String, require: true },
        author: { type:String, required: true },
        likes: { type:Number, required:false},
        comments: { type:Number, required:false}
        

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Post', postSchema)