// SearchBar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ onSubmit }) => {
  return (
    <header className="searchbar">
      <form className="form" onSubmit={onSubmit}>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          name="searchImage"
          placeholder="Search images and photos"
        />
        <button type="submit" className="searchbutton">
          <FontAwesomeIcon icon={faMagnifyingGlass} beat />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
