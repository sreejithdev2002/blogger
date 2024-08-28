import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import "../Styles/global.css";
import CreateBlog from "./CreateBlog";
import InfiniteScroll from "react-infinite-scroll-component";

function Blogs() {
  const mockBlogs = [
    {
      id: 1,
      username: "Sreejith",
      heading: "Heading 1",
      content: "This is the content of Heading 1",
      image: true,
    },
    {
      id: 2,
      username: "Saneesh",
      heading: "Heading 2",
      content: "This is the content of Heading 2",
      image: false,
    },
    {
      id: 3,
      username: "Nikhil",
      heading: "Heading 3",
      content: "This is the content of Heading 3",
      image: true,
    },
    {
      id: 4,
      username: "Nikhitha",
      heading: "Heading 4",
      content: "This is the content of Heading 4",
      image: false,
    },
    {
      id: 5,
      username: "Aasa",
      heading: "Heading 5",
      content: "This is the content of Heading 5",
      image: false,
    },
    {
      id: 6,
      username: "Vaishnima",
      heading: "Heading 6",
      content: "This is the content of Heading 6",
      image: true,
    },
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [blogsData, setBlogsData] = useState(mockBlogs.slice(0, 4));
  const [page, setPage] = useState(1);

  const fetchMoreBlogs = () => {
    const newBlogs = mockBlogs.slice(page * 4, page * 4 + 4);
    setBlogsData((prevBlogs) => [...prevBlogs, ...newBlogs]);
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <main className="blogs">
      <h1>Blogs</h1>
      <div className="blogsContainer">
        {isLoggedIn && <CreateBlog />}
        <InfiniteScroll
          dataLength={blogsData.length}
          next={fetchMoreBlogs}
          hasMore={page * 4 < mockBlogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>No more blogs to load</b>
            </p>
          }
        >
          {blogsData.map((blog) => (
            <Blog blogs={blog} key={blog.id} />
          ))}
        </InfiniteScroll>
      </div>
    </main>
  );
}

export default Blogs;
