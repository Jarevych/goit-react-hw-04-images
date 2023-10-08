import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ setQuery, setImages, setPage }) => {
  const handleSearchSubmit = e => {
    e.preventDefault();
    const inputValue = e.currentTarget.elements.searchImage.value;
    if (inputValue) {
      setQuery(inputValue);
      setImages(null);
      setPage(1);
      e.currentTarget.reset();
    }
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSearchSubmit}>
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
