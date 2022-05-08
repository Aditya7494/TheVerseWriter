import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    num:{
        type:String,
        required:true,
        unique:true
    },
    des1:{
        type:String,
        required:true,
        
    },
    des2:{
        type:String,
        required:true  
    },
    des3:{
        type:String,
        required:true
    },
    des4:{
        type:String,
        required:true
    },
    des5:{
        type:String,
        required:true
    },
    des6:{
        type:String,
        required:true
    },
    des7:{
        type:String,
        required:true
    },
    des8:{
        type:String,
        required:true
    },
    des9:{
        type:String,
        required:true
    },
    des10:{
        type:String,
        required:true
    },
    des11:{
        type:String,
        required:true
    },
    des12:{
        type:String,
        required:true
    },
    timestamp:{
        type:String,
        required:true
    }
});


const post = mongoose.model('post',postSchema);

export default post;