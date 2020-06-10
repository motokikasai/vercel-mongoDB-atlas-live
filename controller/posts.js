import Post from "../model/Post";

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({}); /* find all the data in our database */
    return res.status(200).json({ success: true, data: posts });
  } catch (error) {
    return res.status(400).json({ success: false });
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
