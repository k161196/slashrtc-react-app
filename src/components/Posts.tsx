import React from "react";

function User({ post }) {
  // if (loading) {
  //   return <div>loading</div>;
  //   // console.log(posts.map((item) => item));
  // }

  return (
    <tr className="">
      <td className="px-2 py-3 w-10  ">
        <div className="flex items-center">
          <div className="ml-2">
            <div className="text-sm truncate  leading-5 font-medium text-gray-900">
              {post.title}
            </div>
          </div>
        </div>
      </td>
      <td className=" whitespace-no-wrap">
        <div className="text-sm  leading-5 text-gray-900">
          Regional Paradigm Technician
        </div>
        {/* <div className="text-sm leading-5 text-gray-500">Optimization</div> */}
      </td>
      <td className=" whitespace-no-wrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-500 text-purple-100">
          Active
        </span>
      </td>
      <td className="whitespace-no-wrap text-sm leading-5 text-gray-500">
        Admin
      </td>
      <td className="pr-5 whitespace-no-wrap text-right text-sm leading-5 font-medium">
        <a href="#" className="text-purple-700 hover:text-purple-900">
          Edit
        </a>
      </td>
    </tr>
  );
}

export default User;
