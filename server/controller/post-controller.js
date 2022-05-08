
import Post from "../model/post-schema.js";

export const getPost = async (request,response) => {

    try{
        let data = await Post.find({});
        response.status(200).json(data);
    }
    catch(error){
        response.status(500).json({message: data.message});
    }

}