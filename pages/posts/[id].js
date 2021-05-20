import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const PostPage = ({ post }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!post) {
      router.push("/posts");
    } else {
      setIsLoading(false);
    }
  }, [post]);

  return (
    <>
      {!isLoading ? (
        <>
          <h1>{post.title}</h1>
          <button onClick={() => router.push("/posts")}>Back</button>
        </>
      ) : null}
    </>
  );
};

export default PostPage;

export const getServerSideProps = async (context) => {
  const _currentPost = await axios.get(
    "https://my-json-server.typicode.com/typicode/demo/posts"
  );

  const post = _currentPost.data.find((_post) => _post.id == context.query.id);

  return {
    props: {
      post: post || null,
    },
  };
};
