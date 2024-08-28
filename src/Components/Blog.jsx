import React from "react";
import "../Styles/global.css";

function Blog({ blogs }) {
  return (
    <main className="blog">
      <div className="blogTop">
        <div className="blogTopDiv">
          <div className="blogProfilePic">{blogs.username[0]}</div>
          <h2>{blogs.username}</h2>
        </div>
        <button>...</button>
      </div>
      <div className="blogBottom">
        <h1>{blogs.heading}</h1>
        <p>{blogs.content}</p>
        {blogs.image && <div className="blogImage"></div>}
      </div>
    </main>
  );
}

export default Blog;
