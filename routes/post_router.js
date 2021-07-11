const express = require('express');
const router = express.Router();
const Post = require('../models/post_model');


// insert post
router.post('/', async (req, res) => {
    try {
        const tempPost = Post(req.body);
        const result = await tempPost.save();
        res.json(result);
    } catch (err) {
        res.json({ error: "insert failed" });
    }
});


//get all post
router.get('/', async (req, res) => {

    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        console.log(err);
        res.json({ message: "ERROR" });
    }
});

//get one post
router.get('/:postID', async (req,res) =>{
    try{
        const post = await Post.findById(req.params.postID);
        if(post){
            return res.json(post);
        }else{
            return res.json({message: "post not found"});
        }
    }catch (err) {
        res.json({ error: "error" });
    }
});


//delete post
router.delete('/:postID',async (req,res) =>{
    try{
        const result = await Post.findByIdAndDelete({_id:req.params.postID});
        if (result) {
            return res.json({ message: "post deleted" });
        } else {
            return res.status(404).json({
                message: "post not found"
            });

        }
        
    }catch (err) {
        res.json({ error: "err" });
    }
});



module.exports = router;