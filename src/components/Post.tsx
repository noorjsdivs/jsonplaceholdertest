import React from "react";

const Post = ({ postsData }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {postsData?.data?.map((item: any) => (
        <div
          key={item?.id}
          className="border-[1px] border-gray-400 shadow-md rounded-md p-5"
        >
          <p>
            Title: <span className="font-medium">{item?.title}</span>
          </p>
          <p className="text-sm mt-5">{item?.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Post;
