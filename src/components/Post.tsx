import React from "react";

function Post({ posts, loading }) {
  // if (loading) {
  //   return <div>loading</div>;
  // }
  return (
    <div>
      {posts.map((post) => (
        <h1>{post.title}</h1>
      ))}
    </div>
  );
}

export default Post;
