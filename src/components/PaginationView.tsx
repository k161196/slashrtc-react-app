import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./Post";
import Pagination from "./Pagination";
function PaginationView() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setisLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setisLoading(false);
    };
    fetchPosts();
    return () => {};
  }, []);

  //   console.log(posts);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
  //   console.log(currentPage);

  const paginate = (number) => {
    setCurrentPage(number);
  };
  return (
    <div>
      Pagination
      <Posts posts={currentPost} loading={isLoading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default PaginationView;
