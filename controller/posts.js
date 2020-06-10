import Post from "../model/Post";

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({}); /* find all the data in our database */
    return res.status(200).json({ success: true, data: posts });
  } catch (error) {
    return res.status(400).json({ success: false });
  }
};

// GET by ID
exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.addPost = async (req, res) => {
  try {
    const post = await Post.create(
      req.body
    ); /* create a new model in the database */
    res.status(201).json({ success: true, data: post });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// Update by ID
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(postId, req.body);
    if (!post) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// DeletePost
exports.deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.deleteOne({ _id: postId });
    if (!deletedPost) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
