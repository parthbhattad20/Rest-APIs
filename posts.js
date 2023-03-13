const express = require("express");
const router = express.Router();
const post = require("../models/post");

router.get("/", async (req, res) => {
    try {
        const posts = await post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post("/", async (req, res) => {
    const Post = new post({
        title: req.body.title,
        description: req.body.description,
    });
    try {
        const savedPost = await Post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get("/:postID", async (req, res) => {
    try {
        const Post = await post.findById(req.params.postID);
        res.json(Post);
    } catch (err) {
        res.json({ message: err });
    }
});

router.delete("/:postID", async (req, res) => {
    try {
        const deletedPost = await post.deleteOne({ _id: req.params.postID });
        res.json(deletedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

router.patch("/:postID", async (req, res) => {
    try {
        const updatedPost = post.updateOne(
            { _id: req.params.postID },
            { $set: { title: req.body.postID } }
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
