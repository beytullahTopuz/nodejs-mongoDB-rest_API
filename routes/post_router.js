const express = require('express');
const router = express.Router();
const Post = require('../models/post_model');


// insert post
router.post('/', async (req, res) => {
    try {
        const tempPost = Post(req.body);
        const result = await tempPost.save();
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ error: "insert failed" });
    }
});


//get all post
router.get('/', async (req, res) => {

    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "ERROR" });
    }
});

//get one post
router.get('/:postID', async (req,res) =>{
    try{
        const post = await Post.findById(req.params.postID);
        if(post){
            return res.status(200).json(post);
        }else{
            return res.status(400).json({message: "post not found"});
        }
    }catch (err) {
        res.status(400).json({ error: "error" });
    }
});


//delete post
router.delete('/:postID',async (req,res) =>{
    try{
        const result = await Post.findByIdAndDelete({_id:req.params.postID});
        if (result) {
            return res.status(200).json({ message: "post deleted" });
        } else {
            return res.status(404).json({
                message: "post not found"
            });

        }
        
    }catch (err) {
        res.status(400).json({ error: "err" });
    }
});



module.exports = router;