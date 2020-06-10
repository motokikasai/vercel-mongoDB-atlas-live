import React from "react";

export default class Posts extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch("/api/posts/")
      .then((response) => response.json())
      .then((respBody) => {
        console.log("/api/posts/ response", respBody);
        this.setState({ posts: respBody.data });
      });
  }

  render() {
    return (
      <article>
        <header>
          <h1>Posts</h1>
        </header>
        <section>
          {this.state.posts.length > 0 ? (
            this.state.posts.map((post, index) => (
              <Post key={index} post={post} />
            ))
          ) : (
            <div className="notice">No one posted yet</div>
          )}
        </section>
      </article>
    );
  }
}

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="time">
        {new Date(post.createdAt).toLocaleDateString()}
      </div>
      <div className="body">{post.body}</div>
    </div>
  );
};
