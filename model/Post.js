import mongoose from "mongoose";

// Post
const Post = new mongoose.Schema({
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

// Serverless function can be cold or hot (recently used) by
// checking first if mongoose knows about post we can potentially save
// some time / resources when the function is still hot
export default mongoose.models.Post || mongoose.model("Post", Post);
