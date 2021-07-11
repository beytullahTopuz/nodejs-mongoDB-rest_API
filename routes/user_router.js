
const express = require('express');
const router = express.Router();
const User = require('../models/user_model');
const bcrypt = require('bcrypt');

// get all user
router.get('/', async (req, res) => {

    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ error: err });
    }
});

// insert user
router.post('/', async (req, res) => {
    try {
        const tempUser = User(req.body);
        tempUser.user_password = await bcrypt.hash(tempUser.user_password, 8);
        const result = await tempUser.save();
        res.json(result);
    } catch (err) {
        res.json({ error: "insert failed" });
    }
});

//login
router.post('/login', async (req, res) => {
    try {

        const user = await User.findOne({ user_email: req.body.user_email });

        if (!user) {
            return res.json({ message: "user not faund" });
        }
        const passwordControl = await bcrypt.compare(req.body.user_password, user.user_password);
        if (!passwordControl) {
            return res.json({ message: "wrong password" });
        }
        return res.json(user);


    } catch (err) {
        res.json({ error: "login failed" });
    }
});


//delete user
router.delete('/:userID',async (req,res) =>{
    try{
        const result = await User.findByIdAndDelete({_id:req.params.userID});
        if (result) {
            return res.json({ message: "user deleted" });
        } else {
            return res.status(404).json({
                message: "user not found"
            });

        }
        
    }catch (err) {
        res.json({ message: "err" });
    }
});


module.exports = router;