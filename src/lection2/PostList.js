import React, { useState, useEffect, Fragment } from "react";

import T from "prop-types";

import { PostListItem } from "./PostListItem";
import { MoreButton } from "./MoreButton";
import { Loading } from "./Loading";

const URL = "https://jsonplaceholder.typicode.com/posts";

const fetchData = () => fetch(URL).then(response => response.json());

export const PostList = ({ limit }) => {
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(true);
  const [limitVal, setLimit] = useState(limit);

  useEffect(() => {
    setTimeout(() => {
      fetchData().then(posts => {
        setPosts(posts);
      });
      setLoad(!load);
    }, 3000);
  }, []);

  const accumulateLimit = () => {
    setLimit(limitVal + 10);
  };

  return load ? (
    <Loading />
  ) : (
    <Fragment>
      <ul>
        {posts.map(
          item =>
            item.id <= limitVal && (
              <PostListItem
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
              />
            )
        )}
      </ul>
      {limitVal < posts.length && (
        <MoreButton {...{ limitVal, accumulateLimit }} />
      )}
    </Fragment>
  );
};

PostList.propTypes = {
  limit: T.number.isRequired
};
