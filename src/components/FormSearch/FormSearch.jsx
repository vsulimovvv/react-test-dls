import React from 'react';
import './FormSearch.scss';

const FormSearch = ({ searchValue, searchHandler, showForm }) => {
  console.log(showForm);

  return (
    <form className={showForm ? 'form-search active' : 'form-search'}>
      <input
        onChange={(e) => searchHandler(e.target.value)}
        value={searchValue}
        className="form-search__input"
        type="text"
        placeholder="Type here..."
      />
    </form>
  );
};

export default FormSearch;
