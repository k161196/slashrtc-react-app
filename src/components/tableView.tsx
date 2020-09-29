import React, { useEffect, useState } from "react";

import { Scrollbars } from "react-custom-scrollbars";
import User from "./Posts";
import PageNav from "./PageNav";
import Axios from "axios";

const TableView = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setisLoading(true);
      const res = await Axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setisLoading(false);
    };
    fetchPosts();
    return () => {};
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (number) => {
    setCurrentPage(number);
  };
  return (
    <div className="flex flex-col p-5 w-full h-full">
      <div className="bg-white rounded-t-lg w-full h-full shadow  border-b border-gray-200">
        {/* <div className="shadow  border-b border-gray-200 sm:rounded-lg"> */}
        <Scrollbars>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-1 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-1 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-1 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-1 py-3 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 ">
              {isLoading ? (
                <div>loading</div>
              ) : (
                currentPost.map((post) => <User post={post} />)
              )}

              {/* <User /> */}
            </tbody>
          </table>
        </Scrollbars>
      </div>
      <PageNav
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default TableView;
