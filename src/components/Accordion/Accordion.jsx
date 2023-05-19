import React, { Children, useState } from 'react';
import './Accordion.scss';

const Accordion = ({ title, children, handleClick, id, items }) => {
  return (
    <div className="accordion">
      {items.length > 0 ? (
        <button
          onClick={() => handleClick(id)}
          className="accordion__control"
          type="button"
        >
          <span className="accordion__name">{title}</span>

          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="currentColor"
              strokeLinecap="square"
            />
          </svg>
        </button>
      ) : (
        <a href="" className="accordion__control">
          {title}
        </a>
      )}

      <div className="accordion__content">{children}</div>
    </div>
  );
};

export default Accordion;
