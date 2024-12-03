import PostModel from "../models/blog.js";

const Getsinglepost = async (req, res) => {
  try {
    const postid = req.params.id;
    const Findpost = await PostModel.findById(postid).populate({
      path: "comments",
      populate: {
        path: "userId",
      },
    });

    if (!Findpost) {
        return res.status(404).json({
          success: false,
          message: "Blog post not Found",
        });
      }
      res.status(200).json({
        success: true,
        Post:Findpost,
      });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export { Getsinglepost };
