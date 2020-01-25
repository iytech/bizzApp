const Post = require('../Models/postModel');
const express = require('express')
const router = express.Router();

router.route('/timeline').post((req, res) => {
    const { name, username, post, like, comment, share} = req.body;

    //if(!name || !email || !username || !password) return res.status(400).json({ message: "Please fill all details" });

    const userPost = new Post({
        name,
        username,
        post,
        like,
        comment,
        share
    });

    userPost.save()
        .then(user => res.json(user))
        .catch(err => {
            console.log(err);
            return res.status(500).json({ message: "Something went wrong!" });
        });
});

router.route('/').get((req, res) => {
    Post.find().sort({createdAt: -1})
        .then(user => {
            if(user == ''){
                return res.status(404).json({ message: "Posts not found.." })
            } else {
                return res.json(user)
            }
        })
        .catch(err => {
            return res.status(500).json({ error: err.code });
        })
})

router.route('/:id').delete((req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(() => res.json({ message: "Post deleted successfully.." }))
        .catch(err => {
            return res.status(500).json({ message: "Something went wrong" })
        });
})
module.exports = router;