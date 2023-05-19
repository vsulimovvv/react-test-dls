import React, { useEffect } from 'react';
import './Modal.scss';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ children, closeModal }) => {
  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
        exit={{ opacity: 0 }}
        className="modal"
        onClick={() => closeModal()}
      >
        <div className="modal__wrapper" onClick={(e) => e.stopPropagation()}>
          <div className="modal__header">
            <button
              onClick={() => closeModal()}
              className="modal__close"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="modal__body">{children}</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
