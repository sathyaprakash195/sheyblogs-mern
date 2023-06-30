const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel");

// get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      message: "All Blogs Fetched Successfully",
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get a blog by id
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json({
      message: "Blog Fetched Successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// add a blog
router.post("/", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json({ message: "Blog Added Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// update a blog
router.put("/:id", async (req, res) => {
  try {
    await Blog.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Blog Updated Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// delete a blog
router.delete("/:id", async(req, res) => {
 try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Blog Deleted Successfully" });
 } catch (error) {
   res.status(400).json({ message: error.message });
 }
});

module.exports = router;
