import React, { useState, useEffect } from 'react';
import './PostItem.scss';
import Modal from '../Modal/Modal';

const PostItem = ({ post }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <article className="post-item" onClick={() => setShowModal(true)}>
        <div className="post-item__top">
          <img src={post.img} srcSet={post.img_2x} alt={post.title} />
        </div>
        <div className="post-item__body">
          <span className="post-item__tags">{post.tags}</span>
          <h3 className="post-item__title">{post.title}</h3>
          <div className="post-item__details">
            <b className="post-item__detail">{post.author}</b>
            <span className="post-item__detail">{post.date}</span>
            <span className="post-item__detail">{post.views} views</span>
          </div>
          <p className="post-item__text">{post.text}</p>
        </div>
      </article>

      {showModal && (
        <Modal closeModal={closeModal} showModal={showModal}>
          <img
            className="modal__img"
            src={post.img}
            srcSet={post.img_2x}
            alt={post.title}
          />
          <div className="modal__title">{post.title}</div>
          <div className="modal__text">{post.text}</div>
        </Modal>
      )}
    </>
  );
};

export default PostItem;
