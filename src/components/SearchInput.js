import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchInput = () => {
  const [expanded, setExpanded] = useState(false);

  const handleIconClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="search-container">
      <div className={`search-input ${expanded ? 'expanded' : ''}`}>
        <input type="text" placeholder="Поиск..." />
        <button>
          <FontAwesomeIcon icon={faSearch} onClick={handleIconClick} />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
