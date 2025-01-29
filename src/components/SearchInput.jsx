import React from "react";

function SearchInput({ searchTerm, onSearch}) {
    return (
        <div className="search-bar">
            <input 
                type="text"
                placeholder="Search Notes..."
                value={searchTerm}
                onChange={onSearch} 
             />
        </div>
    )
};

export default SearchInput;