import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import PostItem from '../PostItem/PostItem';
import Loader from '../Loader/Loader';
import FormSearch from '../FormSearch/FormSearch';
import './Posts.scss';

const Posts = ({ search }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPosts = async () => {
    try {
      const res = await axios.get(
        'https://cloud.codesupply.co/endpoint/react/data.json'
      );
      setPosts(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.text.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [search, posts]);

  useEffect(() => {
    setIsLoading(true);
    getPosts();
  }, []);

  return (
    <section className="posts">
      {isLoading && <Loader />}

      <div className="container">
        <ul className="posts__list">
          {filteredPosts?.map((post, index) => {
            return (
              <li className="posts__item" key={index}>
                <PostItem post={post} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Posts;
