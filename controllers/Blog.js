import PostModel from "../models/blog.js";
import fs from "fs";
import path from "path";

const Create = async (req, res) => {
  try {
    const { title, desc, image } = req.body;

    // Check if required fields are present
    if (!title || !desc || !image) {
      return res.status(400).json({
        success: false,
        message: "Title, description, and image are required",
      });
    }

    const CreateBlog = new PostModel({
      title,
      desc,
      image, // Assigning from req.body
    });

    await CreateBlog.save();
    return res.status(200).json({
      success: true,
      message: "Post created successfully",
      post: CreateBlog,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


const Delete = async (req, res) => {
  try {
    const postid = req.params.id;
    const FindPost = await PostModel.findById(postid);
    if (!FindPost) {
      return res.status(400).json({
        success: false,
        message: "Post Not Found",
      });
    }
    // if (FindPost.image) {
    //   const profilepath = path.join("public/images", FindPost.image);
    //   fs.promises
    //     .unlink(profilepath)
    //     .then(() => console.log("Post image deleted "))
    //     .catch((error) => console.log("error deleting post image ", error));
    // }
    const deletpost = await PostModel.findByIdAndDelete(postid);
    return res.status(200).json({
      success: true,
      message: "post deleted",
      post: deletpost,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getpost = async (req, res) => {
  try {
    const posts = await PostModel.find();
    if (!posts) {
      return res.status(400).json({
        success: false,
        message: "Post Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      posts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error get single post",
    });
  }
};

const update = async (req, res) => {
  try {
    const { title, desc, image } = req.body;
    const postid = req.params.id;

    const updatepost = await PostModel.findById(postid);
    if (!updatepost) {
      return res.status(400).json({
        success: false,
        message: "Post Not Found",
      });
    }
    if (title) {
      updatepost.title = title;
    }
    if (desc) {
      updatepost.desc = desc;
    }
    if (image) {
      updatepost.image = image;
    }
    await updatepost.save();
    return res.status(200).json({
      success: true,
      posts: updatepost,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export { Create, Delete, getpost, update };
