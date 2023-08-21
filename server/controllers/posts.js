import postMessage from "../models/post.js"
export const getPosts = async (req,res)=>{
    try {
        const posts = await postMessage.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};

export const createPost = ()=>(req,res)=>{
    const currentPost = req.body;

    const newPost = new postMessage(currentPost);

    try {
        newPost.save();
    } catch (error) {
        res.status(409).json({message: error.message})
    }
};