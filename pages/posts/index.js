import axios from "axios";
import React from "react";
import Link from "next/link";

const PostIndexPage = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((_post, index) => (
          <li key={index}>
            <Link href={`/posts/${_post.id}`}>{_post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostIndexPage;

export const getServerSideProps = async () => {
  const _response = await axios.get(
    "https://my-json-server.typicode.com/typicode/demo/posts"
  );

  if (_response.status === 200) {
    return {
      props: {
        posts: _response.data || null,
      },
    };
  }
};
