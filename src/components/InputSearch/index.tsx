import React, { useState, ChangeEvent } from 'react';
import './styles.scss';

interface SearchInputProps {
  onSearch: (query: string) => void;
  placeholder: string;
}

const SearchInput = ({ onSearch, placeholder }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-input-container">
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchInput;
